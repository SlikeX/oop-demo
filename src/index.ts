import {ViewConstructor} from "./views/view";
const body = document.querySelector<HTMLElement>('body');
const viewController = new ViewConstructor();
if(body){
    viewController.createView(body);
}else{
    throw Error('Body not found')
}


