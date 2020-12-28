import jquery from "jquery"
export class ApiService {
    static post(payload, callback){
        console.log('SAVE')
        jquery.post('http://localhost:4000/users',payload, callback)
    }

    static get(successCallBack){
         jquery.get('http://localhost:4000/users',successCallBack)
    }

    static getkey(keyen,successCallBack){
        if(keyen.length==0){
            this.get()
        }else {
         jquery.get('http://localhost:4000/users?fname='+keyen,successCallBack)
        }
   }

   static getkeylast(keyen,successCallBack){
    jquery.get('http://localhost:4000/users?lastname='+keyen,successCallBack)
}

static getkeycar(keyen,successCallBack){
    jquery.get('http://localhost:4000/users?carBrand='+keyen,successCallBack)
}

static getkeygender(keyen,successCallBack){
    jquery.get('http://localhost:4000/users?gender='+keyen,successCallBack)
}

    static delete(id,callback,e){
       return jquery.ajax('http://localhost:4000/users/'+id,
       {
           type : 'delete',
           success : callback
       });
    }
}