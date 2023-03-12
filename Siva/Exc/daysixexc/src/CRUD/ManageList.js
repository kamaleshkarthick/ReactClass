import React from "react";
import axios from 'axios';

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

        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.setState({ list: response.data })
                }
            }).catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    renderTableData = () => {
        const { meals } = this.state.list;
        if (meals) {
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
    }

    handleDelete = (id) => {
        const { list } = { ...this.state}
        const rowIndex = this.state.list.meals.findIndex(el => el.idMeal == id);
        list.meals.splice(rowIndex,1);
        this.setState({list});
    }

    handleUpdate = (id) => {
        const data = this.state.list.meals.find(el => el.idMeal === id);
        const { formValue } =  {...this.state}
        formValue.menuName = data.strMeal;
        formValue.menuCat = data.strCategory;
        
        this.setState({ targetID: id, action: "U",formValue }, () => {
            this.toggleModal();
        });
    }
    toggleModal = () => {
        this.setState({ modelOpen: !this.state.modelOpen })
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
        if(this.state.action === "C"){
            list.meals.push(obj);
        }else{
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
        //console.log(this.state)
        return (
            <div className="menu">
                <div className={`overlay ${this.state.modelOpen ? 'open' : ''}`}>
                    <div class="container">
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
export default ManageList;