import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent implements OnInit {

  websiteLink = 'http://www.cadmus.com.br';
  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public mask2 = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  host = environment.HOST;



  constructor() { }

  state = {
    brand: `${environment.HOST}/assets/Logo-Cadmus-25.png`,
    menberName: '',
    position: '',
    company: '',
    address: '',
    email: '',
    phone: '',
    phone2: `(11) 4380-9064`,
    website: 'www.cadmus.com.br',
    instagram: 'https://www.instagram.com/soucadmus/',
    facebook: 'https://www.facebook.com/soucadmus/',
    youtube: '',
    linkedin: 'https://www.linkedin.com/company/cadmus-ti/'
  };
  txtToolTip: string;
  formSignature: FormGroup;

  ngOnInit() {
    this.formSignature = new FormGroup({
      company: new FormControl(),
      menber_name: new FormControl()
    });
    this.handleChange();
  }

  handleChange() {

    this.state.phone = this.state.phone.replace(/\D/g, '');
    
    if (this.state.phone.length !== 11 ) {
      this.state.phone = this.state.phone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      this.state.phone = this.state.phone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }


    // if (this.state.website && (this.state.website.indexOf('http://') < 0 || this.state.website.indexOf('https://') < 0)) {
    //   this.websiteLink = `http://${this.state.website}`;
    // } else {
    //   this.websiteLink = this.state.website;
    // }

    // if (this.state.facebook && (this.state.facebook.indexOf('http://') < 0 && this.state.facebook.indexOf('https://') < 0)) {
    //   this.state.facebook = `http://${this.state.facebook}`;
    // }

    // if (this.state.linkedin && (this.state.linkedin.indexOf('http://') < 0 && this.state.linkedin.indexOf('https://') < 0)) {
    //   this.state.linkedin = `http://${this.state.linkedin}`;
    // }

    // if (this.state.instagram && (this.state.instagram.indexOf('http://') < 0 && this.state.instagram.indexOf('https://') < 0)) {
    //   this.state.instagram = `http://${this.state.instagram}`;
    // }

    // if (this.state.youtube && (this.state.youtube.indexOf('http://') < 0 || this.state.youtube.indexOf('https://') < 0)) {
    //   this.state.youtube = `http://${this.state.youtube}`;
    // }

  }

  copy() {
    const range = document.createRange();
    range.selectNode(document.getElementById('signatureBox'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');

    this.txtToolTip = 'Assinatura copiada com sucesso.';
    setTimeout(() => {
      this.txtToolTip = '';
    }, 4500);
  }
}
