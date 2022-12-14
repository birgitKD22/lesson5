const app = Vue.createApp({
    data() {
        return {
            product: 'socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 1,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})