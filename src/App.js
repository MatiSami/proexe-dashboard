import React from "react";
import "./App.css";
import DashTable from "./Components/Dashtable/DashTable";
import ModalWindow from "./Components/Modal/Modal";
import { Table, Button } from "react-bootstrap";
import DeleteModal from "./Components/DeleteModal/DeleteModal";
import EditModal from "./Components/EditModal/EditModal";

class App extends React.Component {
  state = {
    dataUsers: [],
    isModalOpen: false,
    isDeleteModalOpen: false,
    isEditModalOpen: false,
    name: "",
    username: "",
    city: "",
    email: "",
    elementToRemove: "",
    elementToEdit: "",
    validationName: true,
    validationUserName: true,
    validationCity: true,
    validationEmail: true,
    isValidate: false,
    sort: false,
    compare: false,
  };

  componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) =>
        this.setState({
          dataUsers: res,
        }),
        console.log("fetch")
      );
  };
   


  openDeleteModal = (e) => {
    this.setState({
      isDeleteModalOpen: true,
      elementToRemove: e.target.parentElement.parentElement,
    });
  };
  closeDeleteModal = () => {
    this.setState({
      isDeleteModalOpen: false,
    });
  };

  openEditModal = (e) => {
    this.setState({
      isEditModalOpen: true,
      elementToEdit: e.target.parentElement.parentElement,
    });
  };
  closeEditModal = () => {
    this.setState({
      isEditModalOpen: false,
      name: "",
      username: "",
      city: "",
      email: "",
      validationName: true,
      validationUserName: true,
      validationCity: true,
      validationEmail: true,
      isValidate: false,
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      name: "",
      username: "",
      city: "",
      email: "",
      elementToRemove: "",
      elementToEdit: "",
      validationName: true,
      validationUserName: true,
      validationCity: true,
      validationEmail: true,
      isValidate: false,
    });
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleChangeCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  submitFn = (e) => {
    e.preventDefault();

    if (
      this.state.name !== "" &&
      this.state.username !== "" &&
      this.state.city !== "" &&
      this.state.email !== ""
    ) {
      const usersData = this.state.dataUsers;
      const newUser = {
        id: usersData.length + 1,
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        address: {
          city: this.state.city,
        },
      };

      this.setState((prevState) => ({
        dataUsers: [...prevState.dataUsers, newUser],
      }));

      this.closeModal();
      this.setState({
        name: "",
        username: "",
        city: "",
        email: "",
        validationName: true,
        validationUserName: true,
        validationCity: true,
        validationEmail: true,
        isValidate: false,
      });
    }
    if (this.state.name === "") {
      this.setState({
        validationName: false,
        isValidate: true,
      });
    }
    if (this.state.username === "") {
      this.setState({
        validationUserName: false,
        isValidate: true,
      });
    }
    if (this.state.city === "") {
      this.setState({
        validationCity: false,
        isValidate: true,
      });
    }
    if (this.state.email === "") {
      this.setState({
        validationEmail: false,
        isValidate: true,
      });
    }
  };

  handleEdit = (el) => {
    if (
      this.state.name !== "" &&
      this.state.username !== "" &&
      this.state.city !== "" &&
      this.state.email !== ""
    ) {
      el = this.state.elementToEdit.childNodes;
      console.log(el[1]);
      el[1].innerText = this.state.name;
      el[2].innerText = this.state.username;
      el[3].innerText = this.state.email;
      el[4].innerText = this.state.city;
      this.closeEditModal();
    }
    if (this.state.name === "") {
      this.setState({
        validationName: false,
        isValidate: true,
      });
    }
    if (this.state.username === "") {
      this.setState({
        validationUserName: false,
        isValidate: true,
      });
    }
    if (this.state.city === "") {
      this.setState({
        validationCity: false,
        isValidate: true,
      });
    }
    if (this.state.email === "") {
      this.setState({
        validationEmail: false,
        isValidate: true,
      });
    }
  };
  removeElement = (el) => {
    el = this.state.elementToRemove;
    el.remove();
    this.closeDeleteModal();
    this.setState({
      isDeleteModalOpen: false,
    });
  };

  handleSort = () => {
    this.setState((prevState) => ({
      sort: !prevState.sort,
      compare: true,
    }));
  };

  render() {
    const { isModalOpen, isDeleteModalOpen, isEditModalOpen } = this.state;
    return (
      <>
        {isDeleteModalOpen && (
          <DeleteModal
            closeDeleteModal={this.closeDeleteModal}
            openDeleteModal={this.openDeleteModal}
            removeElement={this.removeElement}
            elementToRemove={this.state.elementToRemove}
          />
        )}
        {isModalOpen && (
          <ModalWindow
            closeModal={this.closeModal}
            fetchData={this.state.dataUsers}
            getName={this.handleChangeName}
            getUserName={this.handleChangeUserName}
            getCity={this.handleChangeCity}
            getEmail={this.handleChangeEmail}
            submitFn={this.submitFn}
            validationName={this.state.validationName}
            validationUserName={this.state.validationUserName}
            validationCity={this.state.validationCity}
            validationEmail={this.state.validationEmail}
            isValidate={this.state.isValidate}
          />
        )}
        {isEditModalOpen && (
          <EditModal
            getName={this.handleChangeName}
            closeModal={this.closeEditModal}
            getUserName={this.handleChangeUserName}
            getCity={this.handleChangeCity}
            getEmail={this.handleChangeEmail}
            elementToEdit={this.state.elementToEdit}
            editElement={this.handleEdit}
            validationName={this.state.validationName}
            validationUserName={this.state.validationUserName}
            validationCity={this.state.validationCity}
            validationEmail={this.state.validationEmail}
            isValidate={this.state.isValidate}
          />
        )}
        <div className="wrapper">
          <h1>Dashboard</h1>
          <div className="table-head">
            <p className="table-title">User List</p>
            <Button onClick={this.openModal} variant="primary">
              Add User
            </Button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>
                  <div className="sort">
                    Name
                    <Button onClick={this.handleSort} variant="secondary">
                      Sort
                    </Button>
                  </div>
                </th>
                <th>UserName</th>
                <th>Email</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {this.state.dataUsers !== [] && (<DashTable
              data={this.state.dataUsers}
              openEditModal={this.openEditModal}
              openDeleteModal={this.openDeleteModal}
              sorted={this.state.sort}
              compare={this.state.compare}
            />)}
            
          </Table>
        </div>
      </>
    );
  }
}

export default App;
