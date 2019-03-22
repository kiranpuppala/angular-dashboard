import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { UserDataService} from '../user-data.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userDetails:User[]
  filteredData:User[]
  filterKey:String

  constructor(private userDataService:UserDataService) {
   }

   initializeUsers():void{
    this.userDataService.getUserData().subscribe((data)=>{
      this.userDetails=data
      this.filteredData=data
    })
  }

  handleFilter(event:any):void{
    this.filteredData = this.userDetails.map((value,index)=>{
      if(JSON.stringify(value).includes(event.target.value))
        return value;
    });
  }

  ngOnInit() {
    this.initializeUsers()  
  }

}
