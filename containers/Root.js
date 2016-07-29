class Root extends Component {
    render() {
        return (
            <div>
                <Router history={history} routes={routes} />
            </div>
        );
    }
}
