import styled from './Footer.module.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styled.footer}>
      <div className={styled.footer__wrap}>
        <div className={styled.footer__title}>다리</div>
        <div className={styled.footer__copylight}>
          <a href='mailto:wogml3270@naver.com' rel="nofollow">
            chimsil © 2021 - 2023
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer