import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds: Boolean = false

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => this.showIds = !!params.showIds)
  }
}
