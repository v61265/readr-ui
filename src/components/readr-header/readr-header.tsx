import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'readr-header',
  styleUrl: 'readr-header.scss',
  shadow: true,
})
export class ReadrHeader {
  @Event({ composed: true }) readrLogoLinkClick: EventEmitter;
  readrLogoLinkClickHandler(e) {
    this.readrLogoLinkClick.emit(e)
  }

  render() {
    const readrLogoLinkClickHandler = (e) => this.readrLogoLinkClickHandler(e)

    return (
      <Host>
        <header>
          <h1>
            <a
              href="https://www.readr.tw"
              target="_blank"
              rel="noopener noreferrer"
              onClick={readrLogoLinkClickHandler}
            >
              <svg enable-background="new 0 0 200 186" viewBox="0 0 200 186" xmlns="http://www.w3.org/2000/svg" data-v-2c3f63f2="" class=""><path d="m200 22h-22v-22h-12v22h-22v12h22v22h12v-22h22z" fill="#fff" data-v-2c3f63f2=""></path><g fill="#444746" data-v-2c3f63f2=""><path d="m114.6 154.4c0 1.7-.5 3.2-1.5 4.4s-2.4 2.1-4.2 2.7l8.2 9.8h-6.3l-7-8.9h-1.6v8.9h-5.2v-24.3h7.3c1.5 0 2.9.2 4.2.5s2.3.8 3.3 1.4c.9.6 1.6 1.4 2.1 2.3.4.9.7 1.9.7 3.2zm-5.1.1c0-1.2-.5-2.1-1.5-2.7s-2.2-.8-3.8-.8h-2.1v7.6h1.5c1.7 0 3.2-.3 4.2-1 1.1-.8 1.7-1.8 1.7-3.1z" data-v-2c3f63f2=""></path><path d="m119.7 147h14.6v4h-9.5v5.9h9v4h-9v6.3h9.6v4h-14.7z" data-v-2c3f63f2=""></path><path d="m160.9 171.2h-5.3l-1.7-5.1h-10l-1.7 5.1h-5.3l9.2-24.3h5.5zm-12-20.1-3.6 11h7.3z" data-v-2c3f63f2=""></path><path d="m164.1 147h7.3c2.1 0 4.1.3 5.8.9s3.2 1.5 4.4 2.5c1.2 1.1 2.2 2.4 2.8 3.8.7 1.5 1 3.1 1 4.8s-.3 3.4-1 4.8c-.7 1.5-1.6 2.8-2.8 3.8-1.2 1.1-2.7 1.9-4.4 2.5s-3.7.9-5.8.9h-7.3zm7.5 20.2c1.3 0 2.5-.2 3.6-.5 1.1-.4 2-.9 2.8-1.6s1.4-1.5 1.8-2.5.7-2.1.7-3.4-.2-2.4-.7-3.4c-.4-1-1.1-1.8-1.8-2.5-.8-.7-1.7-1.2-2.8-1.6s-2.3-.5-3.6-.5h-2.3v16.2h2.3z" data-v-2c3f63f2=""></path><path d="m200 157.8h-.8c-1.2 0-2.3.2-3.1.6s-1.5.9-2 1.7v11.2h-5v-17.7h4.8v3.1c.3-1 .9-1.9 1.6-2.4.7-.6 1.7-.9 3-.9.6 0 1.1.1 1.5.2z" data-v-2c3f63f2=""></path><path d="m22 30.8v-10.1h38.9v10.1zm2.9 16.9v-9.1h33.1v9.1zm0 17.3v-9.1h33.1v9.1zm2.4-52v-9.1h28.8v9.1zm35.1 102.5c-.3-.6-1-1.9-1.9-3.9-.6-1.9-1.3-3.4-1.9-4.3 9.9-2.2 20.2-4.5 30.7-6.7l3.8 6.7c-9.6 3.2-19.9 6-30.7 8.2zm-1-100.6v-7.7h31.2v-7.2h12v7.2h32.2v7.7h-32.2v5.8h27.4v6.7h-66.8v-6.7h27.4v-5.8zm1.4 37.1v-19.3h71.6v19.3zm3.4 47.6v-42.3h64.9v42.4zm6.7-61.1v7.2h11v-7.2zm4.3 25.5v5.8h42.8v-5.8zm0 11.6v5.3h42.8v-5.3zm0 11.5v5.3h42.8v-5.3zm15.4-48.6v7.2h12v-7.2zm42.8 77c-8.3-1.6-19.1-4.5-32.2-8.7l3.8-7.2c10.6 2.6 21.1 5 31.7 7.2zm-10.6-77h-12v7.2h12z" data-v-2c3f63f2=""></path><path d="m25.4 73.2v40.4h32.2v-40.4zm23 31.6h-13.4v-22h13.5z" data-v-2c3f63f2=""></path></g><path d="m91 126-45 31v-31h-34v-126h-12v138h33v46l65-46h102v-12z" fill="#ddcf21" data-v-2c3f63f2=""></path><path d="m200 22h-22v-22h-12v22h-22v12h22v22h12v-22h22z" fill="#444746" data-v-2c3f63f2=""></path></svg>
            </a>
          </h1>
          <share-nav />
        </header>
      </Host>
    );
  }
}