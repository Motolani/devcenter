import React from 'react';
import PythonImg from '../../images/python.png';
import DotNetImg from '../../images/dotnet.png';
import WordpressImg from '../../images/wordpress.png';
import AngularImg from '../../images/angular.png';
import ReactImg from '../../images/React.png';
import NodeImg from '../../images/Nodejs.png';
import JavascriptImg from '../../images/js.png';
import HtmlImg from '../../images/CSS.png';
import GoImg from '../../images/GO.png';
import VueImg from '../../images/vue.png';
import MySqlImg from '../../images/mysql.png';
import KubernetesImg from '../../images/kubernetes.png';
import CsharpImg from '../../images/csharp.png';
import BlockchainImg from '../../images/blockchain.png';
import AzureImg from '../../images/azure.png';
import PhpImg from '../../images/php.png';
import LinuxImg from '../../images/linux.png';
import FlutterImg from '../../images/flutter.png';
import IosImg from '../../images/ios.png';
import AwsImg from '../../images/aws.png';


const CodingStack = () => {
  return (
    <div className='coddingStack pt-3 pb-5'>
      <div className='row'>
        <div className='col text-center pb-4'>
          <p> We adhere to coding standards and diverse across multiple stacks </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 text-center preStackBorder'>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={PythonImg} alt='python Img' className='stackImg'/> 
              </div>
              <div className='col-sm-3  offset-sm-5 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Python</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={DotNetImg} alt='DotNetImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">.NET</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={WordpressImg} alt='WordpressImg' className='stackImg'/> 
              </div>
              <div className='col-sm-4  offset-sm-4 stackBorder-p pt-3'>
                <p className="text-center fw-bold">WordPress</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={AngularImg} alt='AngularImg' className='stackImg'/> 
              </div>
              <div className='col-sm-3  offset-sm-5 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Angular</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={ReactImg} alt='ReactImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">React</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 text-center'>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={NodeImg} alt='NodeImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Nodejs</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={JavascriptImg} alt='JavascriptImg' className='stackImg'/> 
              </div>
              <div className='col-sm-4  offset-sm-4 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Javascript</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={HtmlImg} alt='HtmlImg' className='stackImg'/> 
              </div>
              <div className='col-sm-5  offset-sm-3 stackBorder-p pt-3'>
                <p className="text-center fw-bold">HTML5/CSS</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={GoImg} alt='GoImg' className='stackImg'/> 
              </div>
              <div className='col-sm-4  offset-sm-4 stackBorder-p pt-3'>
                <p className="text-center fw-bold">GOlang</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={VueImg} alt='VueImg' className='stackImg'/> 
              </div>
              <div className='col-sm-1  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Vuejs</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 text-center'>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={MySqlImg} alt='MySqlImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">mysql</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={KubernetesImg} alt='KubernetesImg' className='stackImg'/> 
              </div>
              <div className='col-sm-5  offset-sm-3 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Kubernetes</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={CsharpImg} alt='CsharpImg' className='stackImg'/> 
              </div>
              <div className='col-sm-3  offset-sm-5 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Java/C#</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={BlockchainImg} alt='BlockchainImg' className='stackImg'/> 
              </div>
              <div className='col-sm-5  offset-sm-3 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Blockchain</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={AzureImg} alt='AzureImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Azure</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3 text-center'>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={PhpImg} alt='PhpImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">PHP</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={LinuxImg} alt='LinuxImg' className='stackImg'/> 
              </div>
              <div className='col-sm-1  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Linux</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={FlutterImg} alt='FlutterImg' className='stackImg'/> 
              </div>
              <div className='col-sm-3  offset-sm-5 stackBorder-p pt-3'>
                <p className="text-center fw-bold">Flutter</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={IosImg} alt='IosImg' className='stackImg'/> 
              </div>
              <div className='col-sm-4'></div>
              <div className='col-sm-1  offset-sm-2 stackBorder-p pt-3'>
                <p className="text-center fw-bold">IOS</p>
              </div>
            </div>
          </div>
          <div className='stackBorder mb-3 text-start'>
            <div className='row'>
              <div className='col-sm-4 pt-1 img_div'>
                <img src={AwsImg} alt='AwsImg' className='stackImg'/> 
              </div>
              <div className='col-sm-2  offset-sm-6 stackBorder-p pt-3'>
                <p className="text-center fw-bold">AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingStack
