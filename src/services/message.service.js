class Messages {

    getRandomMessage = async () => {
        return await fetch('https://api.chucknorris.io/jokes/random',{
            method: 'GET',

        }).then(res => res.json())

    }

}

export {Messages}

