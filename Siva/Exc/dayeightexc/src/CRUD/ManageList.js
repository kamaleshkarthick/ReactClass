import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { fetchMenulist,setSelectedMenu } from './../Actions/CRUDAction';

class ManageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: {},
            modelOpen: false,
            formValue: {
                menuName: '',
                menuCat: ''
            },
            targetID: null,
            action: "C"
        }
    }

    componentDidMount() {
        //this.props.fetchMenulist();
    }

    renderTableData = () => {
        const meals = this.props.menuList;
        return meals.map(el => {
            return (
                <tr>
                    <td>{el.idMeal}</td>
                    <td>{el.strMeal}</td>
                    <td>{el.strCategory}</td>
                    <td>
                        <button onClick={() => this.handleUpdate(el.idMeal)}>UPDATE</button>
                        <button onClick={() => this.handleDelete(el.idMeal)}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    handleDelete = (id) => {
        const { list } = { ...this.state }
        const rowIndex = this.state.list.meals.findIndex(el => el.idMeal == id);
        list.meals.splice(rowIndex, 1);
        this.setState({ list });
    }

    handleUpdate = (id) => {
        const data = this.props.menuList.find(el => el.idMeal === id);
        this.props.setSelectedMenu(data)
        this.props.history.push("/details/update")
    }
    toggleModal = async () => {
        await this.props.setSelectedMenu(null);
        this.props.history.push("/details/create")
        //this.setState({ modelOpen: !this.state.modelOpen })
    }

    hanldeCreateUpdate = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { list } = { ...this.state };
        const obj = {
            idMeal: this.state.list.meals.length,
            strMeal: this.state.formValue.menuName,
            strCategory: this.state.formValue.menuCat
        }
        if (this.state.action === "C") {
            list.meals.push(obj);
        } else {
            const index = this.state.list.meals.findIndex(el => el.idMeal === this.state.targetID);

            list.meals[index].strMeal = this.state.formValue.menuName;
            list.meals[index].strCategory = this.state.formValue.menuCat;
        }

        this.toggleModal();
        this.setState({ list })
    }

    handleFormUpdate = (value, key) => {

        const { formValue } = { ...this.state };
        formValue[key] = value;
        this.setState({ formValue })
    }


    render() {
        console.log(this.props)
        return (
            <div className="menu">
                <div className={`overlay ${this.state.modelOpen ? 'open' : ''}`}>
                    <div className="container">
                        <h1>Create Item</h1>

                        <form onSubmit={(e) => this.hanldeCreateUpdate(e)} action="">
                            <label hidden="username">
                                <input
                                    onChange={(e) => this.handleFormUpdate(e.target.value, 'menuName')}
                                    value={this.state.formValue.menuName} type="text"
                                    name="Menu Name" id="username" placeholder="username" required /></label>
                            <label hidden="email">
                                <input onChange={(e) =>
                                    this.handleFormUpdate(e.target.value, 'menuCat')}
                                    value={this.state.formValue.menuCat}
                                    type="text" name="Menu Category" id="email"
                                    placeholder="email" required /></label>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div style={{ marginBottom: 30, marginTop: 30 }} className="">
                    <button onClick={() => this.toggleModal()}>Create Menu</button>
                    {/* <Link to={"/details/create"}>Create Menu</Link> */}
                    
                </div>
                <table className="rwd-table">
                    <tr>
                        <th>Meal ID</th>
                        <th>Meal Name</th>
                        <th>Meal Category</th>
                        <th>Action</th>
                    </tr>
                    {this.renderTableData()}
                </table>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        menuList: state.crudManageeRed.menuList
    }
}

export default withRouter(connect(mapStateToProps, {
    fetchMenulist,
    setSelectedMenu
})(ManageList));