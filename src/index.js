const app = {
    catigeories: {
        neurology: {
            h: 'Неврологія',
            src: './src/img/neurology.png'
        },
        massage: {
            h: 'Масаж',
            src: './src/img/massage.png'
        },
        rheumatology: {
            h: 'Ревматологія',
            src: './src/img/rheumatology.png'
        }
    },

    changeCategory(e) {
        if (e.target.nodeName  != 'DIV') {
            var category = e.target.closest('div').id
        } else {
            var category = e.target.id
        }

        $("#info").find('h3').html(`${this.catigeories[category].h}`);
        $("#info").find('img').attr('src', `${this.catigeories[category].src}`);

    },

    init() {
        $( ".category" ).click((e) => this.changeCategory(e))
    }
}

app.init()