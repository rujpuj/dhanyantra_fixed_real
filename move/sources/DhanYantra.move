module dhan_addr::DhanYantra {
    use std::vector;
    use std::string;
    use std::signer;

    struct Strategy has store, drop {
        name: string::String,
        params: string::String,
    }

    struct StrategyStore has key {
        strategies: vector<Strategy>,
    }

    public entry fun init(account: &signer) {
        let addr = signer::address_of(account);
        assert!(!exists<StrategyStore>(addr), 1);
        let strategies = vector::empty<Strategy>();
        move_to(account, StrategyStore { strategies });
    }

    public entry fun register_strategy(account: &signer, name: string::String, params: string::String) {
        let addr = signer::address_of(account);
        if (!exists<StrategyStore>(addr)) {
            Self::init(account);
        };
        let store = borrow_global_mut<StrategyStore>(addr);
        let s = Strategy { name, params };
        vector::push_back(&mut store.strategies, s);
    }

    public entry fun clear_strategies(account: &signer) {
        let addr = signer::address_of(account);
        assert!(exists<StrategyStore>(addr), 2);
        let store = borrow_global_mut<StrategyStore>(addr);
        let empty = vector::empty<Strategy>();
        store.strategies = empty;
    }
}
