import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoDataService} from '../service/data/todo-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome ';
  username: string;

  constructor(private activatedRoute: ActivatedRoute, private todoDataService: TodoDataService, private route: Router) {
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.username;
  }

  manageToDo(): void {
    this.route.navigate(['todos']);
  }


}
