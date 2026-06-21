// Complete Redux Toolkit Counter Logic in Plain Java

class CounterState {
    int val = 0;
}

class Action {
    String type;
    int payload;

    Action(String type) {
        this.type = type;
    }

    Action(String type, int payload) {
        this.type = type;
        this.payload = payload;
    }
}

class Reducer {
    CounterState execute(CounterState state, Action action) {

        switch(action.type) {

            case "increment":
                state.val++;
                break;

            case "decrement":
                state.val--;
                break;

            case "add":
                state.val += action.payload;
                break;

            case "sub":
                state.val -= action.payload;
                break;

            default:
                System.out.println("Unknown Action");
        }

        return state;
    }
}

public class Main {
    public static void main(String[] args) {

        CounterState store = new CounterState();
        Reducer reducer = new Reducer();

        store = reducer.execute(store, new Action("increment"));
        store = reducer.execute(store, new Action("add", 5));
        store = reducer.execute(store, new Action("sub", 2));
        store = reducer.execute(store, new Action("decrement"));

        System.out.println("Counter Value = " + store.val);
    }
}