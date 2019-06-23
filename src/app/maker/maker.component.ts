import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent implements OnInit {

  constructor() { }
  websiteLink = '';
  state = {
    brand: '',
    menberName: '',
    position: '',
    company: '',
    address: '',
    email: '',
    phone: '',
    website: '',
    instagram: '',
    facebook: '',
    youtube: '',
    linkedin: ''
  };
  txtToolTip: string;
  formSignature: FormGroup;

  ngOnInit() {
    this.formSignature = new FormGroup({
      company: new FormControl(),
      menber_name: new FormControl()
    });
  }

  handleChange() {
    if (this.state.website && (this.state.website.indexOf('http://') < 0 || this.state.website.indexOf('https://') < 0)) {
      this.websiteLink = `http://${this.state.website}`;
    } else {
      this.websiteLink = this.state.website;
    }

    if (this.state.facebook && (this.state.facebook.indexOf('http://') < 0 && this.state.facebook.indexOf('https://') < 0)) {
      this.state.facebook = `http://${this.state.facebook}`;
    }

    if (this.state.linkedin && (this.state.linkedin.indexOf('http://') < 0 && this.state.linkedin.indexOf('https://') < 0)) {
      this.state.linkedin = `http://${this.state.linkedin}`;
    }

    if (this.state.instagram && (this.state.instagram.indexOf('http://') < 0 && this.state.instagram.indexOf('https://') < 0)) {
      this.state.instagram = `http://${this.state.instagram}`;
    }

    if (this.state.youtube && (this.state.youtube.indexOf('http://') < 0 || this.state.youtube.indexOf('https://') < 0)) {
      this.state.youtube = `http://${this.state.youtube}`;
    }

  }

  copy() {
    const range = document.createRange();
    range.selectNode(document.getElementById('signatureBox'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');

    this.txtToolTip = 'Assinatura copiada com sucesso.';
    // this.clipboardService.copyFromContent(text);
    setTimeout(() => {
      this.txtToolTip = '';
    }, 4500);
  }
}
