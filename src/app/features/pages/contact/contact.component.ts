import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  isSending = signal<boolean>(false);
  successMessage = signal('');
  errorMessage = signal('');

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) return;

    this.isSending.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    try {
      const result = await emailjs.send(
        'service_n9m19nm',
        'template_7sl2s4b',
        {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        },
        'qhHMv-GQ8p1nNdiEi'
      );

      if (result.status === 200) {
        this.successMessage.set('Mensagem enviada com sucesso!');
        this.contactForm.reset();
        setTimeout(() => this.successMessage.set(''), 5000);
      }
    } catch (error) {
      this.errorMessage.set('Erro ao enviar. Tente novamente mais tarde.');
      console.error(error);
      setTimeout(() => this.successMessage.set(''), 5000);
    } finally {
      this.isSending.set(false);
    }
  }
}
