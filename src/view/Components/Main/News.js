import React, {useState} from "react";
import cn from 'classnames'
import styled from "styled-components";

const News = (props) => {

  const contentsTitleArray = ["News & Media","Recent Papers","Recent Posts"]
  const newItemArray = [
      {
          title:"Awards",
          line1:"Jeung-Hyun and Eunhwi",
          line2:"received awards!"
      },
      {
          title:"Awards",
          line1:"Jeung-Hyun and Eunhwi",
          line2:"received awards!"
      },
      {
          title:"Awards",
          line1:"Jeung-Hyun and Eunhwi",
          line2:"received awards!"
      },
      {
          title:"Awards",
          line1:"Jeung-Hyun and Eunhwi",
          line2:"received awards!"
      },
      {
          title:"Awards",
          line1:"Jeung-Hyun and Eunhwi",
          line2:"received awards!"
      },
      {
          title:"Awards",
          line1:"Jeung-Hyun and Eunhwi",
          line2:"received awards!"
      }

  ]
  const [selectItem, setSelectItem] = useState("News & Media")

  return(
    <Container>
      <TitleWrap>
        {
          contentsTitleArray.map((item,i) => {
            return(
                <Title
                    onClick={()=>{setSelectItem(item)}}
                    className={selectItem == item ? "on" : ""}
                >
                  <span>
                      {item}
                      {i == 0
                      &&
                      <New>
                        UP
                      </New>}
                  </span>
                  <Border/>
                </Title>
            )
          })
        }
      </TitleWrap>
      <NewItemWrap>
          {
              newItemArray.map((item, i) => {
                  return(
                      <NewsItem>
                          <Thumb
                            className={cn({
                                yellow:i==0 || i==2 || i==3 || i==5,
                                pink:i==1|| i==4
                            })}
                          >

                          </Thumb>
                          <TextArea>
                              <h4>{item.title}</h4>
                              <p>{item.line1}</p>
                              <p>{item.line2}</p>
                          </TextArea>
                      </NewsItem>
                  )
              })
          }
      </NewItemWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 115px 0 200px 0;
`
const Title = styled.div`
  cursor: pointer;
  position: relative;
  width: 250px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #A8C3F1;
  padding-bottom: 10px;
  margin-right: 20px;
  &.on{
    span{
      color:#2F6CDD!important;

    }
  }
    span{
      height: 32px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 32px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #A8C3F1;
    }
`
const TitleWrap = styled.div`
    display: flex;
`
const Border = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: 2px;
  background: #2F6CDD;
  transition: all 0.3s;
  width: 0px;
  .on &{
    width: 105px;
  }
`
const New = styled.div`
  margin-left: 5px;
  background: #E77D54;
  border-radius: 50px;
  color: #fff!important;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 32px;
  /* or 229% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`

const NewItemWrap = styled.div`
  display: flex;
  flex-wrap:wrap ;
  width: 1000px;
  margin-top: 76px;
`

const NewsItem = styled.div`
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  cursor: pointer;
  overflow: hidden;
  margin-right: 50px;
  width: 300px;
  margin-bottom: 60px;
  &:nth-child(3n){
    margin-right: 0;
  }
`
const Thumb = styled.div`
  height: 150px;
  &.yellow{
    background: rgba(245, 191, 170, 0.5);
  }
  &.pink{
    background: rgba(216, 149, 171, 0.5);
  }
`
const TextArea = styled.div`
  box-sizing: border-box;
  padding: 20px 30px 27px 30px;
  background: #fff;
    h4{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 16px;
      /* or 67% */

      display: flex;
      align-items: center;

      color: #000000;
      height: 50px;
    }
      p{
        display: block;
        margin-bottom: 15px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        /* or 100% */
    
        display: flex;
        align-items: center;
    
        color: #000000;
      }
`

export default News