import React from "react";

import * as S from './styled'

const Profile = () => {
    return(
        <S.Wrapper>
            <S.WrapperImg 
            src="https://avatars.githubusercontent.com/u/82238031?v=4" 
            alt="Avatar of User"/>

            <S.WrapperUserInfos>

                    <h1>Erick Rinald</h1>
                <div>
                    <S.WrapperUsername>
                        <h4>Username: </h4>
                        <a href="https://github.com/Jrlinkin" target='_blank' rel="noreferrer" >Jrlinkin</a>
                    </S.WrapperUsername>
                </div>

                <S.WrapperStatusCount>
                    <div>
                        <h3>Followers</h3>
                        <span>5</span>
                    </div>
                    <div>
                        <h3>Starreds</h3>
                        <span>5</span>
                    </div>
                    <div>
                        <h3>Followings</h3>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>

            </S.WrapperUserInfos>

        </S.Wrapper>
    )
}

export default Profile