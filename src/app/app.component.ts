import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TvmazeService } from './tvmaze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tc2-rest';

  formSearch: FormGroup
  shows = new Array<any>()
  episodes = new Array<any>()

  constructor(private tvmazeServ: TvmazeService) {

  }

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.formSearch = new FormGroup({
      search: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    })
  }

  onSubmit() {
    if (this.formSearch.valid) {
      this.tvmazeServ.fetchShows(this.formSearch.get('search').value).subscribe((res) => {
        this.shows = res
        console.log(this.shows)
      })
      
    }
  }

  selecionaShow(id: number){
    this.tvmazeServ.getShow(id).subscribe((res) => {
      this.episodes = res
      console.log(this.episodes)
    })
  }

}
