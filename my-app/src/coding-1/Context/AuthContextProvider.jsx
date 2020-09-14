import React from "react";

export const AuthContext = React.createContext();

class AuthContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            token: "",
            isAuth: false
        };
    }

    isAuthHandleEmail = (email) => {
        this.setState({ 
            email: email 
        });
    };

    isAuthHandleToken = (token) => {
        this.setState({ 
            token: token 
        });
    };

    toggleAuth = () => {
        const { isAuth } = this.state
        this.setState({
          isAuth: !isAuth
        });
      };

    render() {
        const { email, token, isAuth } = this.state;
        const { isAuthHandleToken, isAuthHandleEmail ,toggleAuth} = this;
        return (
            <div>
                <AuthContext.Provider value={{ isAuth, email, token, isAuthHandleToken, isAuthHandleEmail,toggleAuth }}>
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        );
    }
}

export default AuthContextProvider;