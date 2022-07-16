export  class ViewConstructor {
    constructor() {
    }

    private createHeader() : HTMLElement{
        const header = document.createElement('header');
        header.classList.add('header');
        header.innerHTML = 'Header';
        return header
    }

    private createMain() : HTMLElement {
        const main = document.createElement('main');
        main.classList.add('main');
        return  main
    }

    private  createFooter() : HTMLElement {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        footer.innerHTML = 'Footer';
        return footer
    }

    public createView(container: HTMLElement): void{
        const header = this.createHeader();
        const main = this.createMain();
        const footer = this.createFooter();
        container.appendChild(header);
        container.appendChild(main);
        container.appendChild(footer);
    }
}
