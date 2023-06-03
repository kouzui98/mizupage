import { GetStaticProps, NextPage } from 'next'
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
import { fetchSteamPersonaName, useSteamPersonaName } from '../lib/external/steam'
import ProfilePicture from '../public/assets/images/my.webp'
import Background from '../public/assets/images/waves-haikei.svg'
{/*-------
const DEPLOY_TARGETS = ['demo', 'prod'] as const
type DeployTarget = (typeof DEPLOY_TARGETS)[number]

type IndexPageProps = {
    deployTarget: DeployTarget
    steam: {
        serverSideName: string
        urls: string[]
    }
}

const IndexPage: NextPage = ({ deployTarget, steam }: IndexPageProps) => {
    const demo = deployTarget === 'demo'
    const steamPersonaName = useSteamPersonaName(steam.urls, steam.serverSideName)
-------*/}
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
                <a className="footer-link" href="zh-hans">
                    中文
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
                            <Monoline comment="kanji">耿 瑞</Monoline>
                            <Monoline comment="kana">コウ ズイ</Monoline>
                            <Monoline comment=""><Redacted hoverToShow>Mizuha</Redacted></Monoline>
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
                            <Monoline comment="">大阪大学 大学院情報科学研究科 情報ネットワーク学専攻</Monoline>
                            <Monoline comment="Murata Lab">先進ネットワークアーキテクチャ講座</Monoline>

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
                    <AccountShowcase.Account
                        href="https://telegram.me/m_mizuha"
                        icon={<FaTelegramPlane />}
                        iconBackground="#0088ccaa"
                        platform="Telegram"
                    >
                        @m_mizuha
                    </AccountShowcase.Account>

                    <AccountShowcase.Account
                        href="https://twitter.com/m_mizuha_/"
                        icon={<FaTwitter />}
                        iconBackground="#1DA1F2"
                        platform="Twitter"
                    >
                        @m_mizuha_
                    </AccountShowcase.Account>
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
                        <ProfileAddonGroupTitle>略歴</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        1998.05: 生まれ
                    </Paragraph>
                    <Paragraph>
                        2016.06: 広西師範大学付属外国語学校 卒業	// 高校
                    </Paragraph>
                    <Paragraph>
                        2016.09: 北京信息科技大学 計算機学院 入学 // 学部
                    </Paragraph>
                    <Paragraph>
                        2020.06: 北京信息科技大学 計算機学院 卒業 // 学士号取得
                    </Paragraph>
                    <Paragraph>
                        2023.04: 大阪大学 大学院情報科学研究科 情報ネットワーク学専攻 入学	// 博士前期課程
                    </Paragraph>
                </DescriptionX>
                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>研究テーマ</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        B5Gによる実時間実世界認識
                    </Paragraph>
                </DescriptionX>
                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>資格</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        2019: コンピュータ技術及びソフトウェア専門技術資格試験 - ソフトウェア設計エンジニア	// == 応用情報技術者
                    </Paragraph>
                    <Paragraph>
                        2019: 日本語能力試験 - N2
                    </Paragraph>
                    <Paragraph>
                        2021: TOEIC L&R - 935 / 990
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
                        大阪大学大学院情報科学研究科
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
                    Copyright © 2023 <Redacted hoverToShow>Mitsuse</Redacted> Mizu<Redacted hoverToShow>ha</Redacted>. Illustrations have their own licenses.
                </FooterParagraph>
            </Footer>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    max-width: 64em;
                    margin: 0 auto;
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
{/*-------
function getDeployTarget(): DeployTarget {
    const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET ?? ''

    if (!DEPLOY_TARGETS.includes(deployTarget as unknown as DeployTarget)) {
        throw new Error(`Invalid deploy target: ${deployTarget}`)
    }

    return deployTarget as DeployTarget
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
    const steamGetPlayerSummariesUrls = (process.env.NEXT_PUBLIC_STEAM_GET_PLAYER_SUMMARIES ?? '').split(',')

    return {
        props: {
            deployTarget: getDeployTarget(),
            steam: {
                serverSideName: await fetchSteamPersonaName(steamGetPlayerSummariesUrls),
                // serverSideName: '1kar0s', // NOTE: you can also use static server-side name here
                urls: steamGetPlayerSummariesUrls,
            },
        },
        revalidate: 60 * 60 * 24 * 7, // revalidates weekly
    }
}
-------*/}
