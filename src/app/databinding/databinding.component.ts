import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-databinding",
  templateUrl: "./databinding.component.html",
  styleUrls: ["./databinding.component.css"],
})
export class DatabindingComponent implements OnInit {
  clgName: string = "Maharshi Karve Stree Shikshan Sasntha, Pune";
  name: string = "Nikita Mane";
  imageURL: string =
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";

  altText: string = "nature image";
  isDisabled = false;
  data = {
    id: "101",
    name: "Harry",
  };
  department: string = "IT";

  constructor() {}

  ngOnInit() {}

  SaveData() {
    alert("Button Disabled");
    this.isDisabled = true;
    this.name = "pornima bhosale";
    this.clgName = "College of Engineering Pune";
  }
}
