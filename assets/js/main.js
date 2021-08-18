const Closelogin = document.querySelector('.js-modal__close');
const modal = document.querySelector('.js-modal');
const modalLogin = document.querySelector('.js-login-modal');
const modalContainer = document.querySelector('.js-container');
modalLogin.onclick = function(){
    modal.classList.add('open-modal');
}
Closelogin.onclick = function(){
    modal.classList.remove('open-modal');
}
modal.onclick = function(){
    modal.classList.remove('open-modal');
}
modalContainer.onclick = function(e){
    e.stopPropagation();
}

const ChangFormLogin = document.querySelector('.js-login');
ChangFormLogin.onclick = function(e){
    const authen = document.querySelector('.authen-form');
    if(authen){

        modalContainer.removeChild(authen);
        const loginContainer = document.createElement('div');
        loginContainer.innerHTML = `
                    <div class="authen-form--login">
                                <header class="authen-form__title">
                                    <h3 class="authen-form__title--heading">Đăng Nhập</h3>
                                </header>
                                <div class="authen-form__form">
                                    <div class="authen-form__group">
                                        <input type="email" class="authen-form__group-input" placeholder="Email">
                                    </div>
                                    <div class="authen-form__group">
                                        <input type="password" class="authen-form__group-input" placeholder="Password">
                                    </div>
                                </div>
                                <div class="btn authen-form__submit">
                                    <button class="btn btn--primary authen-form__submit-btn">Đăng Nhập</button>
                                </div>
                                <div class="authen-form__forgot">
                                    <a href="#" class="authen-form__forgot-text">Quên mật khẩu</a>
                                    <a href="#" class="authen-form__forgot-text">Đăng nhập với SMS</a>
                                </div>
                                <div class="authen-form__devide">
                                    <hr class="authen-form__devide-line">
                                    Hoặc
                                    <hr class="authen-form__devide-line">
                                </div>
                                <div class="authen-form__socials">
                                    <button class="btn btn__socical authen-form__socials-fb">
                                        <i class="authen-form__socials--icon fab fa-facebook-square"></i><span class="authen-form__socials--title">Facebook</span>
                                    </button>
                                    <button class="btn btn__socical authen-form__socials-google ">
                                        <i class="authen-form__socials--icon fab fa-google-plus-square"></i><span class="authen-form__socials--title">Google</span>
                                    </button>
                                    <button class="btn btn__socical authen-form__socials-apple">
                                        <i class="authen-form__socials--icon fab fa-apple"></i><span class="authen-form__socials--title">Apple</span>
                                    </button>
                                </div>
                                <div class="authen-form__changeform">
                                    <p class="authen-form__changeform-text">Bạn chưa có tài khoản?</p>
                                    <span class="authen-form__changeform--btn">Đăng Ký</span>
                                </div>
                            </div>
        
        `;
        modalContainer.appendChild(loginContainer)
    }
    
}
    const historySearch = document.querySelectorAll('.js-header__search-history ul li');
    for(let i = 0; i < historySearch.length; i++){
        historySearch[i].onclick = function(e){
            e.preventDefault();
        }
    }

    // like product
const elementHeart = document.querySelector('.product__icon-heart');
const iconHeartNoLike = document.querySelector('.product__icon-heart-no--like');
const inconHeartLiked = document.querySelector('.product__icon-heart-liked');
iconHeartNoLike.onclick = function(){
    elementHeart.classList.add('product__icon-heart-like');
}
inconHeartLiked.onclick = function(){
    elementHeart.classList.remove('product__icon-heart-like');
}