const recomendedUsers = [
    {
        nombre:'Milli Smith',
        username: '@Milli1243',
        image: 'https://lh3.googleusercontent.com/eDru_j-XN5UGxN8E0DmWjYnobu5UbK-SrcWOwIlV2iIPiFBgpjk7qu8bLl7HtBU-guErN-cWu-aHd0dGwtK_NOkU18ixB0a1tPyTy092empyXTGTOiHT=w500-rp-e30'
    },
    {
        nombre:'Tyrese',
        username: '@codewithtyris',
        image: 'https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30'
    },
    {
        nombre:'Mike Jr.',
        username: '@mikkey',
        image: 'https://lh3.googleusercontent.com/v6rNJ9lk1JgiNayMmPfg8ee2pDBm8_BP7xxjP2v0wm-NAZ2dR-XZ-0sLAxKFGnDsyRu6M3UxEu871dRsfhcAJYGnvbTDHjGXqpLgoM1k51RK8pYp3vM=w500-rp-e30'
    },
]

const recomendedListHTML = document.querySelector('.recomendedPeopleList')

recomendedUsers.forEach((user) => {
    recomendedListHTML.innerHTML += `
        <div class="recomendedUserCard">
            <div class="userRecomendedImage">
                <img class="usersImagenes" src= ${user.image} >
            </div>
            <div class="userRecomendedInfo">
                <h3>${user.nombre}</h3>
                <span>${user.username}</span>
            </div>
            <button class="btn-follow">Follow</button>
        </div>        
    `
})



const posts = [
    {
        nombre:'Lakshay N',
        username: '@laksh_co',
        timestamp: '10 minutes ago',
        likes: '59',
        retweets: 12,
        comments: 17,
        userImage:"https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30",
        content: 'How about a startup which will let you meet people with same interests as you!?'
    },
    {
        nombre:'Product Hunt 😸',
        username: '@ProductHunt',
        timestamp: '10 minutes ago',
        likes: '65',
        retweets: 5,
        comments: 3,
        userImage:"https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30",
        content: 'Create a video message to yourself, your family or your friend, and this platform will deliver it in the future.'
    },
    {
        nombre:'Lucas',
        username: '@lucasok',
        timestamp: '10 minutes ago',
        likes: '65',
        retweets: 5,
        comments: 3,
        userImage:"https://lh3.googleusercontent.com/ONpvLgqVCiILt1f5_bAl_FJn8Y2ZTWd1iABITTUce-UmHV3dkXHy-x7YNK668HnjDa0hoL5t7x0hCy91zdjyvOtdohOcoJ_w5Wuf2Cu5Uz3TmSI76GQ=w500-rp-e30",
        content: 'los dias de lluvia se debe comer torta frita'
    },
    
]

const postContainerHTML = document.querySelector('.posts')

const renderizarPosts = (posts) => {
    postContainerHTML.innerHTML = ''
    posts.forEach(post => {
        postContainerHTML.innerHTML += `
        <div class="postCard">
            <div class="dataposteo">
                <img src="${post.userImage}" width="55px">
                <div class="dataUsuario">
                    <h3>${post.nombre}</h3>
                    <span>${post.timestamp}</span>
                </div>
                <span class="spanUsername">${post.username}</span>
            </div>
            <p>${post.content}</p>
            <div class="dataFooter">
                <div class="dataFooterIconos">
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-arrow-repeat"></i>
                    <i class="bi bi-chat-dots"></i>
                </div>
                <div>
                    <span>${post.likes} likes</span>
                    <span>${post.retweets} retweets</span>
                    <span>${post.comments} comments</span>                                    
                </div>                
            </div>
            <div class="dataFooterBtn">
                <button><i class="bi bi-heart"></i>Like</button>
                <button><i class="bi bi-arrow-repeat"></i>Retweet</button>
                <button><i class="bi bi-chat-dots"></i>Comment</button>
                <button><i class="bi bi-upload"></i>Share</button>           
            </div>
        </div>
        `
    })
}

renderizarPosts(posts)


const tweets = [
    {
        trendingtopic:'TRENDING IN UNITED STATES',
        tweetuser:'#ElonMusk',
        tweetslikes:'83.6 k Tweets',
        
    },
    {
        trendingtopic:'',
        tweetuser:'#Startups',
        tweetslikes:'12 k Tweets',
        
    },
    {
        trendingtopic:'NFT • TRENDING',
        tweetuser:'#dogecoin',
        tweetslikes:'45.1 k Tweets',
    },
    {
        trendingtopic:'FOOTBALL • TRENDING',
        tweetuser:'#MUFC',
        tweetslikes:'35.9 k Tweets',
    },
    {
        trendingtopic:'',
        tweetuser:'#Rangnick',
        tweetslikes:'27.7 k Tweets',
    },
]

const tweetsContainerHTML = document.querySelector('.tweets')

tweets.forEach(tweet => {
    tweetsContainerHTML.innerHTML += `
        <div class="tweetsCard">
            <span class="topic">${tweet.trendingtopic}</span>
            <div class="trendInfo">
                <div class="trendUsuario">
                    <h3>${tweet.tweetuser}</h3>
                    <i class="bi bi-three-dots"></i>
                </div>
                <span>${tweet.tweetslikes}</span>
            </div>
        </div>        
        `
})
