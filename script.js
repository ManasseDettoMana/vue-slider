var root = new Vue(
    {
        el:'#root',
        data:{
            images:[
                {
                    src:'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    alt:''
                },
                {
                    src:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    alt:''
                },
                {
                    src:'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg',
                    alt:''
                },
                {
                    src:'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvY2slMjAlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                    alt:''
                },
            ],
            imageIndex: 0,
        },
        methods:{
            // funzione per andare avanti con l'immagine 
            nextImage: function(){
                this.imageIndex++;

                console.log(this.imageIndex);

                if(this.imageIndex >= this.images.length){
                    this.imageIndex = 0;
                }
            },
            // funzione per andare indietro con l'immagine 
            previousImage: function(){
                this.imageIndex--;

                console.log(this.imageIndex);

                if(this.imageIndex < 0){
                    this.imageIndex = this.images.length - 1;
                }
            }
        }
    }
);