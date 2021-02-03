import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PostsComponent } from './posts/posts.component'
import { PostComponent } from './post/post.component'

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
