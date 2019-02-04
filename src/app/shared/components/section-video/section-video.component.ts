import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { VIDEO_URL } from './section-video.data';

@Component({
  selector: 'cfs-section-video',
  templateUrl: './section-video.component.html',
  styleUrls: ['./section-video.component.scss']
})
export class SectionVideoComponent implements OnInit {

  public youtubeID = '2WV-xuMSZUk';

  public safeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer
      .bypassSecurityTrustResourceUrl(VIDEO_URL(this.youtubeID));
  }

  public ngOnInit(): void {
  }

}
