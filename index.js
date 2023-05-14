class App {
    activeScreen
    container
    constructer ( container) {
        this.container = container;
    }
    changeActivescreen (screen) {
        if (this.activeScreen !== undefined) {
            this.container.innerHTML = "";
        }

        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }

}

const container = document.getElementById("app")

const signup = new Register();
const login = new login();

export default App;