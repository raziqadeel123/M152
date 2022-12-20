import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import paymentMethod from '../../assets/payment-methods.png';
import './Accordion.css';

const AccordionSection = () => {
  return (
    <div className='accordion-Container  '>
      <Accordion className=' accordion-bg d-f fd-c ptb-12 plf-12 ' flush>
        <h3 className='   '>Frequently asked Questions</h3>
        <Accordion.Item className='  ' eventKey='1'>
          <Accordion.Header>
            Which payment methods are M152 Supporting
          </Accordion.Header>
          <Accordion.Body className='d-flex mr-6 ml-6'>
            <Accordion.Body className='w50p'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
            <Accordion.Body className='mr-6 w100p'>
              <img className='img-h' src={paymentMethod} alt='payment method' />
            </Accordion.Body>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='  ' eventKey='0'>
          <Accordion.Header>Do M152 offers global shipping?</Accordion.Header>
          <Accordion.Body className='mr-6 ml-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quas nam veritatis, ducimus error atque totam aliquam obcaecati
            placeat tempora dolorum, ratione fugiat optio omnis. Ullam quam
            quod, sit dolores ratione laudantium voluptas deleniti obcaecati
            voluptatibus dolorum? Dolor ipsum quas mollitia accusantium quisquam
            labore dicta, eos deleniti assumenda illo facere eligendi sapiente
            nesciunt ad sunt reiciendis, nostrum accusamus tempore nemo animi
            velit! Earum ratione, modi voluptates accusantium cumque commodi
            rerum soluta corporis deserunt doloremque quaerat aspernatur cum
            qui. Doloremque quasi odio nam sunt tempore repellendus accusamus
            maxime. Facere alias expedita voluptates id, nemo eos consequuntur
            veritatis, quasi ullam odio impedit, earum et distinctio! Cumque sit
            facilis magnam quidem recusandae repudiandae aspernatur molestias?
            Illum id officia consequatur doloribus odit accusantium voluptatem
            doloremque perspiciatis vel alias quo, quia eveniet vitae neque cum
            ut aliquam! Corrupti quo culpa, cum molestiae sed officiis, porro ut
            similique dicta assumenda quisquam repellendus sequi soluta
            perferendis laborum expedita voluptates. Dolor amet eos doloribus
            recusandae, dicta optio culpa ab consequuntur ullam, ea deleniti
            voluptatum vel nesciunt quod nam sapiente! Voluptatem, id. Doloribus
            itaque odit ut accusantium ullam quae repellendus reiciendis
            molestiae illum, quis, quibusdam aliquam debitis assumenda deserunt
            voluptates beatae quia veniam voluptatum aut facere. Sint veritatis
            unde veniam? Ea nisi, eum maiores dignissimos magnam eos provident
            ex debitis maxime, enim consectetur tempora ipsam assumenda minus
            eligendi! Molestiae laborum neque sapiente delectus rem voluptate
            fugit accusamus illo alias ut ex, qui modi, itaque aliquid in error
            ullam amet! Magnam assumenda, provident laudantium quae expedita
            molestiae officiis quidem vel distinctio magni optio enim quia,
            perspiciatis dolor tenetur. Voluptate alias est ipsa nisi,
            voluptatum perferendis iusto dolorum laudantium, odit aliquid quidem
            ducimus id, quod facilis nulla? Consectetur qui ab alias. Eos
            asperiores, necessitatibus minima repudiandae odio consequatur totam
            optio repellendus aliquid doloribus omnis non numquam natus iusto
            nobis ad consequuntur?
          </Accordion.Body>
          <Accordion.Body className='mr-6 ml-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className='  ' eventKey='2'>
          <Accordion.Header>Return policy for EU</Accordion.Header>
          <Accordion.Body className='mr-6 ml-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          <Accordion.Body className='mr-6 ml-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className=' ' eventKey='3'>
          <Accordion.Header>Fairtrade?</Accordion.Header>
          <Accordion.Body className='mr-6 ml-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className='  ' eventKey='4'>
          <Accordion.Header>How does 24/7 Support works?</Accordion.Header>
          <Accordion.Body className='mr-6 ml-6'>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Number of Supporter</th>
                  <th>Working hours</th>
                  <th>Calls</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>30 Supporter</td>
                  <td>6am till 1pm</td>
                  <td>120+/h</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>50 Supporter</td>
                  <td>2pm till 9pm</td>
                  <td>200+/h</td>
                </tr>
                <tr>
                  <td>3</td>
                  {/* <td colSpan={2}>10pm till 5am</td> */}
                  <td>10 Supporter</td>
                  <td>10pm till 5am</td>
                  <td>20+/h</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
