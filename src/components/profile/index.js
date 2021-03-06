import React from "react";

import * as S from './styled';

import useGithub from "../../hooks/github-hooks";

const Profile = () => {

    const { githubState } = useGithub()

    return(
        <S.Wrapper>
            <S.WrapperImg 
            src={githubState.user.avatar_url ? githubState.user.avatar_url : 'https://avatars.githubusercontent.com/u/43662415?v=4'} 
            alt="Avatar of User"/>

            <S.WrapperUserInfos>

                    <h1>{githubState.user.name}</h1>
                <div>
                    <S.WrapperUsername>
                        <h4>Username: </h4>
                        <a href={githubState.user.html_url} target='_blank' rel="noreferrer" >{githubState.user.login}</a>
                    </S.WrapperUsername>

                    <S.WrapperUsername>
                        {githubState.user.company ? <> <h4>Company: </h4><span>{githubState.user.company}</span> </> : ''}
                    </S.WrapperUsername>

                    <S.WrapperUsername>
                        {githubState.user.location ? <><h4>Location: </h4><span>{githubState.user.location}</span></> : ''}
                    </S.WrapperUsername>

                    <S.WrapperUsername>
                        {githubState.user.blog 
                        ? <>  <h4>Blog: </h4><a href={githubState.user.blog} target='_blank' rel="noreferrer" >{githubState.user.blog}</a> </>
                        : ''}
                    </S.WrapperUsername>

                </div>

                <S.WrapperStatusCount>
                    <div>
                        <h3>Followers</h3>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h3>Repos</h3>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                    <div>
                        <h3>Followings</h3>
                        <span>{githubState.user.following}</span>
                    </div>
                </S.WrapperStatusCount>

            </S.WrapperUserInfos>

        </S.Wrapper>
    )
}

export default Profile