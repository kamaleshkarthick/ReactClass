import React from "react";
import { connect } from 'react-redux';
import { createMenuList,updateMenuList } from './../Actions/CRUDAction';
import { withRouter } from 'react-router-dom';
class CreatItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuName: '',
            menuCat: ''
        }
    }



    componentDidMount() {
        if (this.props.selectedMenu) {
            const { strMeal, strCategory } = this.props.selectedMenu;
            this.setState({
                menuName: strMeal,
                menuCat: strCategory
            })
        }
    }

    handleFormUpdate = (value, key) => {
        this.setState({ [key]: value })
    }

    hanldeCreateUpdate = (e) => {
        e.preventDefault();
        let obj = null;
        if (this.props.selectedMenu) {
            obj = {
                idMeal: this.props.selectedMenu.idMeal,
                strMeal: this.state.menuName,
                strCategory: this.state.menuCat
            }
            this.props.updateMenuList(this.props.selectedMenu.idMeal,obj)
        } else {
            obj = {
                idMeal: this.props.menuList.length,
                strMeal: this.state.menuName,
                strCategory: this.state.menuCat
            }
            this.props.createMenuList(obj)
        }

        this.props.createMenuList(obj)
        this.props.history.push("/")
    }

    render() {
        console.log(this.props.selectedMenu, "selectedMenu")
        return (
            <div className="menu">
                <div className="container">
                    <h1>Create Item</h1>

                    <form onSubmit={(e) => this.hanldeCreateUpdate(e)} action="">
                        <label hidden="username">
                            <input
                                onChange={(e) => this.handleFormUpdate(e.target.value, 'menuName')}
                                value={this.state.menuName} type="text"
                                name="Menu Name" id="username" placeholder="username" required /></label>
                        <label hidden="email">
                            <input onChange={(e) =>
                                this.handleFormUpdate(e.target.value, 'menuCat')}
                                value={this.state.menuCat}
                                type="text" name="Menu Category" id="email"
                                placeholder="email" required /></label>

                        <button type="submit">Submit</button>
                    </form>
                </div>



            </div>
        )
    }
}


const mapStateToProps = state => {

    return {
        menuList: state.crudManageeRed.menuList,
        selectedMenu: state.crudManageeRed.selectedMenu
    }
}

export default withRouter(connect(mapStateToProps, {
    createMenuList,
    updateMenuList
})(CreatItem));