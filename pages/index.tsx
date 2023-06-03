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
                <a className="footer-link" href="zh-hans">
                    中文
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
                            <Monoline comment="Murata Lab">Advanced Network Architecture Research Laboratory,</Monoline>
                            <Monoline comment="">Department of Information Networking,</Monoline>
                            <Monoline comment="">Graduate School of Information Science and Technology,</Monoline>
                            <Monoline comment="">Osaka University</Monoline>
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
                        <ProfileAddonGroupTitle>biography</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        1998.05: Born in <b>Guilin, China</b>
                    </Paragraph>
                    <Paragraph>
                        2016.06: Graduated from the <b>Foreign Language School Attached to Guangxi Normal University</b>  // high school
                    </Paragraph>
                    <Paragraph>
                        2016.09: Enrolled in Computer School, <b>Beijing Information Science and Technology University</b>  // undergraduate
                    </Paragraph>
                    <Paragraph>
                        2020.06: Graduated from Computer School, <b>Beijing Information Science and Technology University</b>  // B.Eng.
                    </Paragraph>
                    <Paragraph>
                        2023.04: Enrolled in Graduate School of Information Science and Technology, <b>Osaka University</b>  // postgraduate
                    </Paragraph>
                </DescriptionX>

                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>research-topic</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        <b>Real-time Real-world Recognition by B5G</b>
                    </Paragraph>
                </DescriptionX>

                <DescriptionX>
                    <ProfileAddonGroupX>
                        <ProfileAddonGroupTitle>certification</ProfileAddonGroupTitle>
                    </ProfileAddonGroupX>
                    <Paragraph>
                        2019: <b>Qualification of Computer and Software Professional</b> - Software Designer	// == Applied Information Technology Engineer (Japan)
                    </Paragraph>
                    <Paragraph>
                        2019: <b>JLPT</b> - N2
                    </Paragraph>
                    <Paragraph>
                        2021: <b>TOEIC L&R</b> - 935 / 990
                    </Paragraph>
                </DescriptionX>



            </Row>

            <Footer>

                <FooterParagraph icon={IoLink}>
                    <a className="footer-link" href="https://www.anarg.jp/?lang=en">
                        Murata Lab
                    </a>
                    <span className="footer-external-link-icon">
                        <FaExternalLinkAlt />
                    </span>
                    &nbsp;&nbsp;
                    <a className="footer-link" href="https://www.ist.osaka-u.ac.jp/english/">
                        Graduate School of Information Science and Technology
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
                { /* serverSideName: '1kar0s', // NOTE: you can also use static server-side name here */ }
{/*-------
                urls: steamGetPlayerSummariesUrls,
            },
        },
        revalidate: 60 * 60 * 24 * 7, { /* revalidates weekly */ }
{/*-------
    }
}
-------*/}
