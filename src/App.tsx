/** @jsxImportSource @emotion/react */
// @ts-nocheck
import React from 'react';
// import { css} from "@emotion/react";

function App() {
  return (<></>);
  // return (
  //     <>
  //       <div className="all_wrap">
  //         <div css={css`position:fixed;z-index:9999; top:0px; left:0px; width:200px; height:200px; background:url('/common/images/diagonal.png');background:red;`}>
  //           <embed id="bgm" src="/common/swf/bgm.swf" width="100" height="100" wmode="transparent" css={css`z-index:9999;`}/>
  //         </div>
  //         <div className="main-first">
  //           <div className="intro_container">
  //             <h1>Introduction</h1>
  //             <h3 css={css`margin-bottom:5px;`}>What Is LINEBLUR?</h3>
  //             <p>LINEBLUR 는 Line + Blur, 선과 흐림의 미학을 모토로 만들어진 이름입니다.</p>
  //             <p>단순하고 간결한 조합이 창의적인 생각을 만듭니다.</p>
  //             <p>LINEBLUR is combination of Line and Blur. It means the beauty of line and blur.</p>
  //             <p css={css`margin-bottom:50px`}>The combination of Simplicity and Clarity create CREATIVE thinking.</p>
  //             <div><img className="moveToLeft" src="/common/images/creative.png" width="350" alt="image" /></div>
  //             <div><img className="moveToRight" src="/common/images/lineblur.png" width="550" alt="image" /></div>
  //           </div>
  //           <div css={css`position:absolute; width:570px; height:440px; top:700px; left:50%; margin-left:-320px; overflow:hidden;`}>
  //             <embed src="/common/swf/colour.swf" css={css`margin:-30px 0px 0px -15px;`} width="600px" height="500" wmode="transparent" type="application/x-shockwave-flash"></embed>
  //           </div>
  //           <div css={css`position:absolute; bottom:50px; left:50%; margin-left:-100px;`}><img className="moveToRight" src="/common/images/wi-logo.png" width="550" alt="image" /></div>
  //         </div>
  //         <div className="main-second">
  //           <div className="gallery_container">
  //             <h1 className="moveToLeft" css={css`color:#f1f1f1`}>CREATIVE Gallery</h1>
  //             {/*<table width="600" cellpadding="5">*/}
  //             {/*  <tr>*/}
  //             {/*    <?php for($i = 1; $i <= 25; $i++) { ?>*/}
  //             {/*    <?php if($i <= 22) { ?>*/}
  //             {/*    <?php if($i == 20) { ?>*/}
  //             {/*    <?php echo "<td>&nbsp;</td></tr>*/}
  //             {/*<tr>"; ?>*/}
  //             {/*    <?php } ?>*/}
  //             {/*    <td width="110" height="90">*/}
  //             {/*      <div css="position:relative"><a css="display:block; width:100%; height:100%" className="fancy adi moveTo<?php if($i % 2 == 0) echo ' Right'; else echo 'Left'; ?>" rel="group"*/}
  //             {/*                                        href="/common/images/photo/<?php echo $i; ?>.jpg">*/}
  //             {/*        <div className="bg_white" css="position:absolute;width:100%;height:100%;background:#fff;opacity:0;"></div>*/}
  //             {/*        <img src="/common/images/photo/<?php echo $i; ?>.jpg" width="110" height="90"></a></div>*/}
  //             {/*    </td>*/}
  //             {/*    <?php } ?>*/}
  //             {/*    <?php if($i % 5 == 0 && $i != 20) echo "</tr>*/}
  //             {/*<tr>"; ?>*/}
  //             {/*    <?php } ?>*/}
  //             {/*</table>*/}
  //           </div>
  //
  //           <div className="youtube_container">
  //             <h1 className="moveToRight">CREATIVE Animation</h1>
  //             <ul>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140"><a className="fancy-media moveToLeft" href="http://www.youtube.com/watch?v=yhGoFCOOeak" rel="yhGoFCOOeak">
  //                       <img src="http://i3.ytimg.com/vi/yhGoFCOOeak/default.jpg" alt="image" /></a></td>
  //                     <td>
  //                       <div className="moveToLeft">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=yhGoFCOOeak" rel="yhGoFCOOeak">An extremely creative animation- Unusual Stop Motion</a></h3>
  //                         <p>스톱모션과 종이를 이용한 애니메이션. Production Company: Film master, Milan Director: Donato Sansone Creative, director, producer, DP, editor, illustrator: Donato Sansone Sound:
  //                           Enrico Ascoli</p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToRight" href="http://www.youtube.com/watch?v=Lc-vINJmhNk" rel="Lc-vINJmhNk"><img src="http://i3.ytimg.com/vi/Lc-vINJmhNk/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToRight">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=Lc-vINJmhNk" rel="Lc-vINJmhNk">Alarm</a></h3>
  //                         <p>Mesai 애니메이션제작팀에서 만든 한국 단편 애니메이션 Alarm</p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToLeft" href="http://www.youtube.com/watch?v=6vZ0iqUS6sg" rel="6vZ0iqUS6sg"><img src="http://i3.ytimg.com/vi/6vZ0iqUS6sg/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToLeft">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=6vZ0iqUS6sg" rel="6vZ0iqUS6sg">Stop Motion | Whiteboard Animation: The Marker Maker</a></h3>
  //                         <p>The Marker Maker is a fun stop motion whiteboard animation.
  //                           Music and Animation created by Jonny Lawrence.
  //                           Voice by Eckhart Tolle.</p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToRight" href="http://www.youtube.com/watch?v=w0rgZAnYObY" rel="w0rgZAnYObY"><img src="http://i3.ytimg.com/vi/w0rgZAnYObY/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToRight">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=w0rgZAnYObY" rel="w0rgZAnYObY">Chalky Adventure</a></h3>
  //                         <p>A stop motion movie i made some years ago. it consists of about 1500 photos. its just for fun so please enjoy! :) i dont want to violate any copyright laws.</p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToLeft" href="http://www.youtube.com/watch?v=BQ9YtJC-Kd8" rel="BQ9YtJC-Kd8"><img src="http://i3.ytimg.com/vi/BQ9YtJC-Kd8/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToLeft">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=BQ9YtJC-Kd8" rel="BQ9YtJC-Kd8">自主制作アニメーション『the TV show』</a></h3>
  //                         <p>[영상] 스기 모토 아키라 스케(椙本晃佑, SUGIMOTO Kousuke)<br/>
  //                           [음악] 배우 타카유키(マナベタカユキ, MANABE Takayuki) <br/>
  //                           [소개] 2009년 제작한 애니메이션 뮤직 비디오 (This is an animation music video that produced independently in 2009.)</p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //             </ul>
  //           </div>
  //
  //
  //           <div css={css`position:absolute; width:500px; height:500px; bottom:600px; left:50%; margin-left:-500px; overflow:hidden;`}>
  //             <embed src="/common/swf/Round.swf" width="100%" height="500" wmode="transparent" type="application/x-shockwave-flash"></embed>
  //           </div>
  //           <div css={css`position:absolute; width:500px; height:500px; bottom:100px; left:50%; margin-left:200px; overflow:hidden;`}>
  //             <embed src="/common/swf/Round.swf" width="100%" height="500" wmode="transparent" type="application/x-shockwave-flash"></embed>
  //           </div>
  //         </div>
  //         <div className="main-third">
  //           <div className="youtube_container2">
  //             <h1 className="moveToRight" css={css`color:#f1f1f1;`}>CREATIVE Commercial</h1>
  //             <ul>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToRight" href="http://www.youtube.com/watch?v=bsFlYUlwZMc" rel="bsFlYUlwZMc"><img src="http://i3.ytimg.com/vi/bsFlYUlwZMc/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToRight">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=bsFlYUlwZMc" rel="bsFlYUlwZMc">Adidas Commercial 2012 (Messi, Beckham, Derrick Rose) - Zoom
  //                           Advertising</a></h3>
  //                         <p></p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //               <li>
  //                 <table width="590">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToLeft" href="http://www.youtube.com/watch?v=jm8ZnEX3RQE" rel="jm8ZnEX3RQE"><img src="http://i3.ytimg.com/vi/jm8ZnEX3RQE/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToLeft">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=jm8ZnEX3RQE" rel="jm8ZnEX3RQE">8관왕을 수상한 창의적인 광고</a></h3>
  //                         <p></p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //               <li>
  //                 <table width="490" align="right">
  //                   <tbody>
  //                   <tr>
  //                     <td width="140">
  //                       <a className="fancy-media moveToLeft" href="http://www.youtube.com/watch?v=0-9EYFJ4Clo" rel="0-9EYFJ4Clo"><img src="http://i3.ytimg.com/vi/0-9EYFJ4Clo/default.jpg" alt="image" /></a>
  //                     </td>
  //                     <td>
  //                       <div className="moveToLeft">
  //                         <h3><a className="fancy-media" href="http://www.youtube.com/watch?v=0-9EYFJ4Clo" rel="0-9EYFJ4Clo">The Dog Strikes Back: 2012 Volkswagen Game Day Commercial</a></h3>
  //                         <p>2012 Game Day Commercial의 확장버젼인 이 광고는 스포티한 2012년형 폭스바겐 비틀이 강아지로 하여금 몸매관리를 하게 만들고 깜짝 변화를 하게 됩니다.</p>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                   </tbody>
  //                 </table>
  //               </li>
  //             </ul>
  //           </div>
  //
  //           <div css={css`position:absolute; width:500px; height:500px; bottom:300px; left:50%; margin-left:-20px; overflow:hidden;`}>
  //             <embed src="/common/swf/Round.swf" width="100%" height="500" wmode="transparent" type="application/x-shockwave-flash"></embed>
  //           </div>
  //
  //           <div className="intro_container2">
  //             <h1 className="moveToLeft">CREATIVE idea</h1>
  //             <h3 className="moveToRight">1. 심리적 압박 시에 좋은 아이디어를 얻는다.</h3>
  //             <h3 className="moveToLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 한가지 아이디어에만 집착하지 않는다.</h3>
  //             <h3 className="moveToRight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. 작은 것에도 집중한다.</h3>
  //             <h3 className="moveToLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. 자만이 새로운 발견을 막는 장애가 될 수 있다.</h3>
  //             <h3 className="moveToRight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. 약간의 모호함은 상상력을
  //               자극한다.</h3>
  //             <h3 className="moveToLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.
  //               은유</h3>
  //             <h3 className="moveToRight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.
  //               나는 내가 무엇을 모르는지 모른다.</h3>
  //             <h3 className="moveToLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.
  //               사고 초기단계 작업이 퇴짜를 맞아도 개의치 않는다.</h3>
  //             <h3 className="moveToRight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.
  //               스스로 광대짓을 즐긴다.</h3>
  //             <h3 className="moveToLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.
  //               탐험가, 예술가, 판사, 전사의 역할을 맡는다.</h3>
  //           </div>
  //
  //           <div css={css`position:absolute; bottom:50px; left:50%; margin-left:-600px;`}><img className="moveToRight" src="/common/images/wi-logo.png" width="550" alt="image" /></div>
  //         </div>
  //         <div className="main-fourth">
  //           <div css={css`position:absolute; width:1000px; height:500px; top:0px; left:50%; margin-left:-500px; overflow:hidden;`}>
  //             <embed src="/common/swf/Drop.swf" width="100%" height="500" wmode="transparent" type="application/x-shockwave-flash"></embed>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  // );
}

export default App;
