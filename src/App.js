import React, { Component } from "react";
import "./App.css";
import Laptops from "./Laptops";
import LaptopChart from "./Charts/LaptopChart";
import ListAllLaptopsButton from "./Forms/ListAllLaptopsButton";
import CreateLaptopForm from "./Forms/CreateLaptopForm";
import UpdateLaptopForm from "./Forms/UpdateLaptopForm";
import ListLaptopForm from "./Forms/ListLaptopForm";
import DeleteLaptopForm from "./Forms/DeleteLaptopForm";
import Phones from "./Phones";
import PhoneChart from "./Charts/PhoneChart";
import ListAllPhonesButton from "./Forms/ListAllPhonesButton";
import CreatePhoneForm from "./Forms/CreatePhoneForm";
import UpdatePhoneForm from "./Forms/UpdatePhoneForm";
import ListPhoneForm from "./Forms/ListPhoneForm";
import DeletePhoneForm from "./Forms/DeletePhoneForm";

var baseUrl = "https://galvanize-tower-back-end.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptops: [],
      phones: []
    };
    this.phoneCreateSubmitHandler = this.phoneCreateSubmitHandler.bind(this);
    this.phoneUpdateSubmitHandler = this.phoneUpdateSubmitHandler.bind(this);
    this.phoneListSubmitHandler = this.phoneListSubmitHandler.bind(this);
    this.phoneDeleteSubmitHandler = this.phoneDeleteSubmitHandler.bind(this);
    this.listAllPhonesSubmitHandler = this.listAllPhonesSubmitHandler.bind(
      this
    );
    this.laptopCreateSubmitHandler = this.laptopCreateSubmitHandler.bind(this);
    this.laptopUpdateSubmitHandler = this.laptopUpdateSubmitHandler.bind(this);
    this.laptopListSubmitHandler = this.laptopListSubmitHandler.bind(this);
    this.laptopDeleteSubmitHandler = this.laptopDeleteSubmitHandler.bind(this);
    this.listAllLaptopsSubmitHandler = this.listAllLaptopsSubmitHandler.bind(
      this
    );
  }

  getAllData() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
          laptops: response.laptops,
          phones: response.phones
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getAllData();
  }

  getLaptopCreateFormData() {
    var data = new FormData(document.querySelector("#createLaptop"));
    var form = {
      battery: data.get("laptopBattery"),
      laptopName: data.get("laptopName"),
      laptopUrl: data.get("laptopImgUrl"),
      memoryAmount: data.get("laptopMemoryAmount"),
      memoryType: data.get("laptopMemoryType"),
      price: data.get("laptopPrice"),
      processorSpeed: data.get("laptopProcessorSpeed"),
      resolutionHeight: data.get("laptopResolutionHeight"),
      resolutionWidth: data.get("laptopResolutionWidth"),
      screenSize: data.get("laptopScreenSize"),
      storageAmount: data.get("laptopStorageAmount"),
      storageUnit: data.get("laptopStorageUnit"),
      weightAmount: data.get("laptopWeight"),
      weightUnit: data.get("laptopWeightUnit")
    };
    document.querySelector("#createLaptop").reset();
    return form;
  }

  getLaptopUpdateFormData() {
    var data = new FormData(document.querySelector("#updateLaptop"));
    var form = {
      battery: data.get("laptopBattery"),
      id: data.get("laptopId"),
      laptopName: data.get("laptopName"),
      laptopUrl: data.get("laptopImgUrl"),
      memoryAmount: data.get("laptopMemoryAmount"),
      memoryType: data.get("laptopMemoryType"),
      price: data.get("laptopPrice"),
      processorSpeed: data.get("laptopProcessorSpeed"),
      resolutionHeight: data.get("laptopResolutionHeight"),
      resolutionWidth: data.get("laptopResolutionWidth"),
      screenSize: data.get("laptopScreenSize"),
      storageAmount: data.get("laptopStorageAmount"),
      storageUnit: data.get("laptopStorageUnit"),
      weightAmount: data.get("laptopWeight"),
      weightUnit: data.get("laptopWeightUnit")
    };
    document.querySelector("#updateLaptop").reset();
    return form;
  }

  getPhoneCreateFormData() {
    var data = new FormData(document.querySelector("#createPhone"));
    var form = {
      battery: data.get("phoneBattery"),
      phoneName: data.get("phoneName"),
      phoneUrl: data.get("phoneImgUrl"),
      price: data.get("phonePrice"),
      processorSpeed: data.get("phoneProcessorSpeed"),
      resolutionHeight: data.get("phoneResolutionHeight"),
      resolutionWidth: data.get("phoneResolutionWidth"),
      screenSize: data.get("phoneScreenSize"),
      storageAmount: data.get("phoneStorageAmount"),
      weightAmount: data.get("phoneWeight")
    };
    document.querySelector("#createPhone").reset();
    return form;
  }

  getPhoneUpdateFormData() {
    var data = new FormData(document.querySelector("#updatePhone"));
    var form = {
      battery: data.get("phoneBattery"),
      id: data.get("phoneId"),
      phoneName: data.get("phoneName"),
      phoneUrl: data.get("phoneImgUrl"),
      price: data.get("phonePrice"),
      processorSpeed: data.get("phoneProcessorSpeed"),
      resolutionHeight: data.get("phoneResolutionHeight"),
      resolutionWidth: data.get("phoneResolutionWidth"),
      screenSize: data.get("phoneScreenSize"),
      storageAmount: data.get("phoneStorageAmount"),
      weightAmount: data.get("phoneWeight")
    };
    document.querySelector("#updatePhone").reset();
    return form;
  }

  listAllLaptopsSubmitHandler(event) {
    event.preventDefault();
    fetch(baseUrl + "laptops")
      .then(response => response.json())
      .then(response => {
        this.setState({
          laptops: response.laptops
        });
      })
      .catch(err => console.log(err));
  }

  laptopCreateSubmitHandler(event) {
    event.preventDefault();
    fetch(baseUrl + "laptops/", {
      method: "post",
      body: JSON.stringify(this.getLaptopCreateFormData()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  laptopUpdateSubmitHandler(event) {
    event.preventDefault();
    fetch(
      baseUrl + "laptops/" + document.querySelector("#laptopUpdateId").value,
      {
        method: "put",
        body: JSON.stringify(this.getLaptopUpdateFormData()),
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  laptopListSubmitHandler(event) {
    event.preventDefault();
    fetch(baseUrl + "laptops/" + document.querySelector("#laptopListId").value)
      .then(response => response.json())
      .then(response => {
        document.querySelector("#listLaptop").reset();
        var array = [];
        array.push(response.laptop);
        this.setState({
          laptops: array
        });
      })
      .catch(err => console.log(err));
  }

  laptopDeleteSubmitHandler(event) {
    event.preventDefault();
    fetch(
      baseUrl + "laptops/" + document.querySelector("#laptopDeleteId").value,
      {
        method: "delete",
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => {
        document.querySelector("#deleteLaptop").reset();
        this.componentDidMount();
      })
      .catch(err => console.log(err));
  }

  listAllPhonesSubmitHandler(event) {
    event.preventDefault();
    fetch(baseUrl + "phones")
      .then(response => response.json())
      .then(response => {
        this.setState({
          phones: response.phones
        });
      })
      .catch(err => console.log(err));
  }

  phoneCreateSubmitHandler(event) {
    event.preventDefault();
    fetch(baseUrl + "phones/", {
      method: "post",
      body: JSON.stringify(this.getPhoneCreateFormData()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.getAllData())
      .catch(err => console.log(err));
  }

  phoneUpdateSubmitHandler(event) {
    event.preventDefault();
    fetch(
      baseUrl + "phones/" + document.querySelector("#phoneUpdateId").value,
      {
        method: "put",
        body: JSON.stringify(this.getPhoneUpdateFormData()),
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => this.getAllData())
      .catch(err => console.log(err));
  }

  phoneListSubmitHandler(event) {
    event.preventDefault();
    fetch(baseUrl + "phones/" + document.querySelector("#phoneListId").value)
      .then(response => response.json())
      .then(response => {
        document.querySelector("#listPhone").reset();
        var array = [];
        array.push(response.phone);
        this.setState({
          phones: array
        });
      })
      .catch(err => console.log(err));
  }

  phoneDeleteSubmitHandler(event) {
    event.preventDefault();
    fetch(
      baseUrl + "phones/" + document.querySelector("#phoneDeleteId").value,
      {
        method: "delete",
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => {
        document.querySelector("#deletePhone").reset();
        this.getAllData();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>The Ultimate Laptop/Phone Tracker</h1>
        <p className="subHead">
          Newsweek calls The Ultimate Laptop/Phone Tracker "the best website for
          tracking laptop and phone specs if you need that sorta thing...which
          you dont"
        </p>
        <h2>Laptops</h2>
        <Laptops data={this.state.laptops} />
        <LaptopChart data={this.state.laptops} />
        <ListAllLaptopsButton
          listAllLaptopsSubmitHandler={this.listAllLaptopsSubmitHandler}
        />
        <div className="formContainer">
          <CreateLaptopForm
            laptopCreateSubmitHandler={this.laptopCreateSubmitHandler}
          />
          <UpdateLaptopForm
            laptopUpdateSubmitHandler={this.laptopUpdateSubmitHandler}
          />
          <ListLaptopForm
            laptopListSubmitHandler={this.laptopListSubmitHandler}
          />
          <DeleteLaptopForm
            laptopDeleteSubmitHandler={this.laptopDeleteSubmitHandler}
          />
        </div>
        <h2>Phones</h2>
        <Phones data={this.state.phones} />
        <PhoneChart data={this.state.phones} />
        <ListAllPhonesButton
          listAllPhonesSubmitHandler={this.listAllPhonesSubmitHandler}
        />
        <div className="formContainer">
          <CreatePhoneForm
            phoneCreateSubmitHandler={this.phoneCreateSubmitHandler}
          />
          <UpdatePhoneForm
            phoneUpdateSubmitHandler={this.phoneUpdateSubmitHandler}
          />
          <ListPhoneForm phoneListSubmitHandler={this.phoneListSubmitHandler} />
          <DeletePhoneForm
            phoneDeleteSubmitHandler={this.phoneDeleteSubmitHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
