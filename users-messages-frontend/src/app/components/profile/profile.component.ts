import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserPreviewDTO } from '../../models/userPreviewDTO';
import { DatePipe, NgFor } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userPreview!: UserPreviewDTO;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private datePipe : DatePipe) {
    this.userPreview = new UserPreviewDTO();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const nickname = params.get('nickname')!;
        this.userService.readUsser(nickname).subscribe({
          next: (user) => {
            this.userPreview = user;
            console.log(this.userPreview);
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    );
      
  }

  getDate(date: Date) {
    return this.datePipe.transform(date.toString());
  }

  

  
  
}
