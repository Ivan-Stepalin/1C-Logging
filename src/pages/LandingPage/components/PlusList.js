import React, {useRef} from "react"
import {LandingConatainer} from "./LandingConatainer"
import {Button, Card, Carousel, Col, Row} from "antd"
import Title from "antd/lib/typography/Title"
import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import "./PlusList.less"
import {isMobile} from "react-device-detect"

export const PlusList = () => {
    const slider = useRef()

    return (
        <LandingConatainer id={"plusList"} backgroundColor={"#141414"}>
            <div style={{padding: "52px 75px 127px"}}>
                <Title level={2} style={{marginBottom: 24}}>
                    Плюсы
                </Title>
                <div style={{position: "relative"}} className={"plus-list__container"}>
                    <Button
                        icon={<LeftOutlined style={{fontSize: 30}}/>}
                        size={"large"}
                        type={"text"}
                        onClick={() => slider.current.prev()}
                        style={{
                            position: "absolute",
                            left: -65,
                            top: "calc(50% - 30px)"
                        }}
                    />
                    {isMobile ? (
                        <Carousel
                            style={{maxWidth: 800}}
                            dots={false}
                            ref={(ref) => {
                                slider.current = ref
                            }}>
                            <div>
                                <Card
                                    title={"01."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Сбор данных не затрагивает целостность информационных систем 1С
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"02."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Долгосрочное хранение, поиск и работа с массивным объемом данных не оказывает
                                    влияния на продуктивную
                                    среду, не замедляет производительность информационных баз
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"03."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Осутствие ограничений в использовании по платформе и конфигурациям 1С
                                </Card>
                            </div>
                            <div>

                                <Card
                                    title={"04."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Единое пространство для анализа и контроля работы всех информационных баз,
                                    сравнение их основных
                                    параметров работоспособности, включая тестовый контур
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"05."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Централизованная среда обеспечивает равный доступ к данным для разработчиков
                                    и инженеров без
                                    искажения информации, сокращая время на диагностику и устранение неполадок в
                                    работе
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"06."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Удобство интерфейса позволяет тонко и гибко фильтровать, сортировать
                                    представляемые данные
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"07."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Реализация механизма анализа разных видов запросов и блокировок с детальными
                                    показателями
                                    влияния на ИТ-инфрастуктуру недоступного в штатных функциях платформы 1С
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"08."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Всесторонний оперативный мониторинг возникающих ошибок и неисправностей
                                </Card>
                            </div>
                            <div>
                                <Card
                                    title={"09."}
                                    style={{borderRadius: 8, height: "100%", margin: "0 5px"}}
                                    headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                    bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                    Вся работа выполняется из браузера
                                </Card>
                            </div>
                        </Carousel>
                    ) : (
                        <Carousel
                            style={{maxWidth: 1290}}
                            dots={false}
                            ref={(ref) => {
                                slider.current = ref
                            }}>
                            <div>
                                <Row gutter={[24, 24]}>
                                    <Col span={8}>
                                        <Card
                                            title={"01."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Сбор данных не затрагивает целостность информационных систем 1С
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            title={"02."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Долгосрочное хранение, поиск и работа с массивным объемом данных не
                                            оказывает влияния на
                                            продуктивную среду, не замедляет производительность информационных баз
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            title={"03."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Осутствие ограничений в использовании по платформе и конфигурациям 1С
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <Row gutter={[24, 24]}>
                                    <Col span={8}>
                                        <Card
                                            title={"04."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Единое пространство для анализа и контроля работы всех информационных баз,
                                            сравнение их основных
                                            параметров работоспособности, включая тестовый контур
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            title={"05."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Централизованная среда обеспечивает равный доступ к данным для разработчиков
                                            и инженеров без
                                            искажения информации, сокращая время на диагностику и устранение неполадок в
                                            работе
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            title={"06."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Удобство интерфейса позволяет тонко и гибко фильтровать, сортировать
                                            представляемые данные
                                        </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div>
                                <Row gutter={[24, 24]}>
                                    <Col span={8}>
                                        <Card
                                            title={"07."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Реализация механизма анализа разных видов запросов и блокировок с детальными
                                            показателями
                                            влияния на ИТ-инфрастуктуру недоступного в штатных функциях платформы 1С
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            title={"08."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Всесторонний оперативный мониторинг возникающих ошибок и неисправностей
                                        </Card>
                                    </Col>
                                    <Col span={8}>
                                        <Card
                                            title={"09."}
                                            style={{borderRadius: 8, height: "100%"}}
                                            headStyle={{border: "none", fontSize: 36, color: "#7CB305"}}
                                            bodyStyle={{paddingTop: 0, fontSize: 18}}>
                                            Вся работа выполняется из браузера
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Carousel>
                    )}

                    <Button
                        icon={<RightOutlined style={{fontSize: 30}}/>}
                        size={"large"}
                        type={"text"}
                        onClick={() => slider.current.next()}
                        style={{position: "absolute", right: -65, top: "calc(50% - 30px)"}}
                    />
                </div>
            </div>
        </LandingConatainer>
    )
}
