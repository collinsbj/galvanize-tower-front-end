import React, { Component } from "react";
import "./App.css";
import Laptops from "./Laptops";
import Phones from "./Phones";
import LaptopForm1 from "./Forms/LaptopForm1";
import LaptopForm2 from "./Forms/LaptopForm2";
import LaptopForm3 from "./Forms/LaptopForm3";
import LaptopForm4 from "./Forms/LaptopForm4";
import ListAllLaptopsButton from "./Forms/ListAllLaptopsButton";
import PhoneForm1 from "./Forms/PhoneForm1";
import PhoneForm2 from "./Forms/PhoneForm2";
import PhoneForm3 from "./Forms/PhoneForm3";
import PhoneForm4 from "./Forms/PhoneForm4";
import ListAllPhonesButton from "./Forms/ListAllPhonesButton";
import LaptopChart from "./Charts/LaptopChart";
import PhoneChart from "./Charts/PhoneChart";

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

  laptopCreateSubmitHandler(event) {
    event.preventDefault();
    fetch("https://galvanize-tower-back-end.herokuapp.com/laptops/", {
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
      "https://galvanize-tower-back-end.herokuapp.com/laptops/" +
        document.querySelector("#laptopUpdateId").value,
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
    fetch(
      "https://galvanize-tower-back-end.herokuapp.com/laptops/" +
        document.querySelector("#laptopListId").value
    )
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
      "https://galvanize-tower-back-end.herokuapp.com/laptops/" +
        document.querySelector("#laptopDeleteId").value,
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

  listAllLaptopsSubmitHandler(event) {
    event.preventDefault();
    fetch("https://galvanize-tower-back-end.herokuapp.com/laptops")
      .then(response => response.json())
      .then(response => {
        this.setState({
          laptops: response.laptops
        });
      })
      .catch(err => console.log(err));
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

  phoneCreateSubmitHandler(event) {
    event.preventDefault();
    fetch("https://galvanize-tower-back-end.herokuapp.com/phones/", {
      method: "post",
      body: JSON.stringify(this.getPhoneCreateFormData()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  phoneUpdateSubmitHandler(event) {
    event.preventDefault();
    fetch(
      "https://galvanize-tower-back-end.herokuapp.com/phones/" +
        document.querySelector("#phoneUpdateId").value,
      {
        method: "put",
        body: JSON.stringify(this.getPhoneUpdateFormData()),
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  phoneListSubmitHandler(event) {
    event.preventDefault();
    fetch(
      "https://galvanize-tower-back-end.herokuapp.com/phones/" +
        document.querySelector("#phoneListId").value
    )
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
      "https://galvanize-tower-back-end.herokuapp.com/phones/" +
        document.querySelector("#phoneDeleteId").value,
      {
        method: "delete",
        headers: new Headers({ "Content-Type": "application/json" })
      }
    )
      .then(response => {
        document.querySelector("#deletePhone").reset();
        this.componentDidMount();
      })
      .catch(err => console.log(err));
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

  listAllPhonesSubmitHandler(event) {
    event.preventDefault();
    fetch("https://galvanize-tower-back-end.herokuapp.com/phones")
      .then(response => response.json())
      .then(response => {
        this.setState({
          phones: response.phones
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    fetch("https://galvanize-tower-back-end.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          laptops: response.laptops,
          phones: response.phones
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Laptops</h1>
        <Laptops data={this.state.laptops} />
        <LaptopChart data={this.state.laptops} />
        <ListAllLaptopsButton
          listAllLaptopsSubmitHandler={this.listAllLaptopsSubmitHandler}
        />
        <div className="formContainer">
          <LaptopForm1
            laptopCreateSubmitHandler={this.laptopCreateSubmitHandler}
          />
          <LaptopForm2
            laptopUpdateSubmitHandler={this.laptopUpdateSubmitHandler}
          />
          <LaptopForm3 laptopListSubmitHandler={this.laptopListSubmitHandler} />
          <LaptopForm4
            laptopDeleteSubmitHandler={this.laptopDeleteSubmitHandler}
          />
        </div>
        <h1>Phones</h1>
        <Phones data={this.state.phones} />
        <PhoneChart data={this.state.phones} />
        <ListAllPhonesButton
          listAllPhonesSubmitHandler={this.listAllPhonesSubmitHandler}
        />
        <div className="formContainer">
          <PhoneForm1
            phoneCreateSubmitHandler={this.phoneCreateSubmitHandler}
          />
          <PhoneForm2
            phoneUpdateSubmitHandler={this.phoneUpdateSubmitHandler}
          />
          <PhoneForm3 phoneListSubmitHandler={this.phoneListSubmitHandler} />
          <PhoneForm4
            phoneDeleteSubmitHandler={this.phoneDeleteSubmitHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
