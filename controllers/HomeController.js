exports.index = (req, res) => {
    res.render('index.ejs', { title: 'NGUYEN TUE Index Page' })
}

exports.about = (req, res) => {
    res.render('about.ejs', { title: 'NGUYEN TUE About Page' })
}
exports.list_items = (req, res) => {
    let items = [
        { name: 'Apple', price: 150 },
        { name: 'Orange', price: 200 },
        { name: 'Peach', price: 350 },
    ]
    //処理
    let data = { 
        items: items,
    }
    // HTML の表示 & data を受け渡す
    //views/home/about.ejs
    res.render('items.ejs', data)
}