import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-asset-results',
  templateUrl: './asset-results.component.html',
  styleUrls: ['./asset-results.component.css']
})
export class AssetResultsComponent implements OnInit {

  data: any[] = [];

  constructor(private el:ElementRef) {
    this.data =
    [
      {  "Preview": "8264227", "Content Type": "Promo", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Footage", "DSID": "1014MX01", "Title": "MADONNA MUSIC", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Promo", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Music Video", "DSID": "1014MX01", "Title": "MADONNA INTERVIEW", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Promo", "DSID": "1014MX01", "Title": "MADONNA FANS", "Content ": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Box", "DSID": "1014MX01", "Title": "MADONNA ROCKUMENTARY", "Content ": "Out", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Finished", "DSID": "1014MX01", "Title": "MADONNA EVITA", "Content Owner": "None", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Promo", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Music Video", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Box", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Music", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Footage", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" },
      {  "Preview": "8264227", "Content Type": "Footage", "DSID": "1014MX01", "Title": "MADONNA MOVIE", "Content Owner": "Music - MTV", "Channel": "MTV", "Encoding Status": "HELD FOR REVIEW", "Entered Date": "14/07/2000" }
    ]
  }

  ngOnInit() {
  }

  calcH() {
    return (this.el.nativeElement.offsetHeight-40)+'px'; // - 28 to get enough space for viewing the actual horizontal scroll 
  }

  calcW() {
    return this.el.nativeElement.offsetWidth+'px';
  }

}
