import { NextPage } from 'next'
import {
    FaCookieBite,
    FaExternalLinkAlt,
    FaGithub,
    FaNetworkWired,
    FaPlane,
    FaSteamSymbol,
    FaTelegramPlane,
    FaTwitter,
    FaWeibo,
    FaMailBulk,
} from 'react-icons/fa'
import { IoBulb, IoGitBranch, IoLanguage, IoLink } from 'react-icons/io5'
import { AccountShowcase } from '../components/display/accounts'
import { Footer, FooterParagraph } from '../components/display/footer'
import {
    Header,
    ProfileAddonGroup,
    ProfileAddonGroupX,
    ProfileAddonGroupTitle,
    ProfileAddons,
    ProfileNameStandout,
} from '../components/display/header'
import { LabelGroup, LabelItem } from '../components/display/labels'
import { Monoline, MonolineGroup } from '../components/display/monolines'
import { Row } from '../components/layout'
import { Description, DescriptionX, Dimmed, Paragraph, Redacted } from '../components/typography'

import ProfilePicture from '../public/assets/images/my.webp'
import Background from '../public/assets/images/waves-haikei.svg'


const IndexPage: NextPage = () => {
    return (
        <div className="container">

            <FooterParagraph icon={IoLanguage}>
                <a className="footer-link" href="/">
                    English
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span>
                &nbsp;&nbsp;
                <a className="footer-link" href="ja-jp">
                    日本語
                </a>
                <span className="footer-external-link-icon">
                    <FaExternalLinkAlt />
                </span>
            </FooterParagraph>

            <Header
                profilePicture={ProfilePicture}
                profileName={
                    <>
                        {/* amphi[ne]ko */}

                        <ProfileNameStandout
                            backgroundColor="hsla(0, 100%, 82%, 0.25)"
                            href="https://en.wikipedia.org/wiki/Germanium"
                            hoverRuby="Germanium"
                            hoverColor="hsla(0, 100%, 82%, 0.75)"
                            ruby="32"
                        >
                            Ge
                        </ProfileNameStandout>
                        ng Rui
                    </>
                }
            >
                <ProfileAddons>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>also-known-as</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="Chinese">耿瑞</Monoline>
                            <Monoline comment="Kana">コウ ズイ</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>languages</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="native">zh-Hans</Monoline>
                            <Monoline comment="primary">en</Monoline>
                            <Monoline comment="installed">ja</Monoline>
                        </MonolineGroup>
                    </ProfileAddonGroup>
                    <ProfileAddonGroup>
                        <ProfileAddonGroupTitle>belonging</ProfileAddonGroupTitle>
                        <MonolineGroup>
                            <Monoline comment="Murata Lab">大阪大学大学院 信息科学研究科 信息网络学专攻 先进网络架构研究室</Monoline>

                        </MonolineGroup>
                    </ProfileAddonGroup>
                </ProfileAddons>
            </Header>

            <AccountShowcase.Container>
                <AccountShowcase.Category title="oss">
                    <AccountShowcase.Account
                        href="https://github.com/kouzui98/"
                        icon={<FaGithub />}
                        iconBackground="#000000"
                        platform="GitHub"
                    >
                        kouzui98
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="email">
                    <AccountShowcase.Account
                        href="#"
                        icon={<FaMailBulk />}
                        iconBackground="#000000"
                        platform="Email"
                    >
                        r-geng(at)ist.osaka-u.ac.jp
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="#"
                        icon={<FaMailBulk />}
                        iconBackground="#000000"
                        platform="Email"
                    >
                        kouzui98(at)gmail.com
                    </AccountShowcase.Account>
                </AccountShowcase.Category>

                <AccountShowcase.Category title="social-accounts">

                </AccountShowcase.Category>

                <AccountShowcase.Category title="gaming">
                    <AccountShowcase.Account
                        href="https://steamcommunity.com/id/mitsusemizuha/"
                        icon={<FaSteamSymbol />}
                        iconBackground="#000000"
                        platform="Steam"
                    >
                        {'\u{1D489}\u{1D482}\u{1D493}\u{1D55E}\u{1D560}\u{1D556}'}
                    </AccountShowcase.Account>
                </AccountShowcase.Category>
            </AccountShowcase.Container>

            <Row>
                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>简历</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        1998.05: 出生于<b>中国桂林市</b>
                    </Paragraph>
                    <Paragraph>
                        2016.06: 毕业于<b>广西师范大学附属外国语学校</b>  // 高中
                    </Paragraph>
                    <Paragraph>
                        2016.09: 入学<b>北京信息科技大学计算机学院</b>  // 本科
                    </Paragraph>
                    <Paragraph>
                        2020.06: 毕业于<b>北京信息科技大学计算机学院</b>  // 工学学士学位
                    </Paragraph>
                    <Paragraph>
                        2023.04: 入学<b>大阪大学大学院信息科学研究科</b>大阪大学大学院信息科学研究科  // 硕士研究生
                    </Paragraph>
                </DescriptionX>

                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>研究内容</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        <b>B5G实时真实世界识别</b>
                    </Paragraph>
                </DescriptionX>

                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>资格</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        2019: <b>全国计算机技术与软件专业技术资格考试</b> - 软件设计师	// == 应用信息技术者（日本）
                    </Paragraph>
                    <Paragraph>
                        2019: <b>日本语能力测试</b> - N2
                    </Paragraph>
                    <Paragraph>
                        2021: <b>托业 L&R</b> - 935 / 990
                    </Paragraph>
                </DescriptionX>



            </Row>

            <Footer>

                <FooterParagraph icon={IoLink}>
                    <a className="footer-link" href="https://www.anarg.jp/">
                        村田研究室
                    </a>
                    <span className="footer-external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                    &nbsp;&nbsp;
                    <a className="footer-link" href="https://www.ist.osaka-u.ac.jp/">
                        大阪大学大学院信息科学研究科
                    </a>
                    <span className="footer-external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                </FooterParagraph>

                <FooterParagraph icon={IoGitBranch}>
                    <a className="footer-link" href="https://github.com/amphineko/reactiveneko">
                        Fork this template on GitHub: amphineko/reactiveneko
                    </a>
                    <span className="footer-external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                </FooterParagraph>
                <FooterParagraph icon={IoBulb}>
                    Copyright © 2024 Mizu. Illustrations have their own licenses.
                </FooterParagraph>
            </Footer>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 64em;
                    margin: 0 auto;
                    padding: 0 0.4rem;
                }

                .footer-link {
                    color: inherit;
                    text-decoration: none;
                }

                .footer-external-link-icon {
                    font-size: 0.75em;
                    margin-left: 0.5em;
                    vertical-align: 0.25em;
                }

                .silent-link {
                    color: inherit;
                    text-decoration: none;
                }
            `}</style>

            <style jsx global>{`
                body {
                    background: url('${Background}') no-repeat;
                    background-color: #aaa;
                    background-size: cover;
                    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFangTC-Light', 'Microsoft YaHei', '微软雅黑',
                        'STHeiti Light', STXihei, '华文细黑', Heiti, '黑体', 'sans-serif';
                    margin: 0;
                    min-height: 100vh;
                    padding: 1em 0;
                }
            `}</style>
        </div>
    )
}

export default IndexPage

