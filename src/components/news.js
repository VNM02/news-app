import React, { Component } from 'react'
import NewsItem from './newsitem';
export class news extends Component {
	articles=[
		{
			"source": {
				"id": null,
				"name": "ESPN"
			},
			"author": "Dave McMenamin",
			"title": "LeBron James to NBA commissioner - I want team in Las Vegas - ESPN",
			"description": "LeBron James used his news conference after an exhibition game in Las Vegas to make a personal plea to NBA commissioner Adam Silver, angling to be first in line to own the team if the league ever expands to Sin City.",
			"url": "https://www.espn.com/nba/story/_/id/34737060/lebron-james-tells-commissioner-want-team-las-vegas",
			"urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1006%2Fr1071689_1296x729_16%2D9.jpg",
			"publishedAt": "2022-10-06T08:40:02Z",
			"content": "LAS VEGAS -- After wowing the crowd at T-Mobile Arena, scoring 23 points in 17 minutes in the Los Angeles Lakers' 119-115 preseason loss to the Phoenix Suns, LeBron James saved his biggest play for t… [+3336 chars]"
		},
		{
			"source": {
				"id": "cnn",
				"name": "CNN"
			},
			"author": "Natasha Bertrand, Katie Bo Lillis",
			"title": "US believes elements within Ukraine's government authorized assassination near Moscow, sources say - CNN",
			"description": "The US intelligence community believes that the car bombing that killed Darya Dugina, the daughter of prominent Russian political figure Alexander Dugin, was authorized by elements within the Ukrainian government, sources briefed on the intelligence told CNN.",
			"url": "https://www.cnn.com/2022/10/05/politics/us-intelligence-ukraine-dugina-assassination/index.html",
			"urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221005135959-01-daria-dugina-farewell-ceremony-220923.jpg?c=16x9&q=w_800,c_fill",
			"publishedAt": "2022-10-06T06:50:00Z",
			"content": "The US intelligence community believes that the car bombing that killed Darya Dugina, the daughter of prominent Russian political figure Alexander Dugin, was authorized by elements within the Ukraini… [+3766 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "NBCSports.com"
			},
			"author": null,
			"title": "Report: Draymond 'forcefully struck' Poole at Warriors practice - NBC Sports",
			"description": "Draymond Green reportedly could face internal discipline after an altercation with Jordan Poole at Warriors practice Wednesday.",
			"url": "https://www.nbcsports.com/bayarea/warriors/nba-rumors-draymond-green-jordan-poole-altercation-warriors-practice",
			"urlToImage": "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Jordan-Poole-Draymond-Green-USA-.17226019jpg.jpg",
			"publishedAt": "2022-10-06T05:03:45Z",
			"content": "Draymond Green reportedly could face internal discipline after an altercation with Warriors teammate Jordan Poole at practice Wednesday. The Athletic's Shams Charania and Anthony Slater cited source… [+1047 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "CNBC"
			},
			"author": "Sofia Pitt",
			"title": "The iPhone 14 Plus wins on battery life and screen size, and is $200 cheaper than the Pro Max - CNBC",
			"description": "If you prefer a larger display and don't need all of the newest innovations, the iPhone 14 Plus is a great upgrade.",
			"url": "https://www.cnbc.com/2022/10/06/apple-iphone-14-plus-review-big-screen-and-best-iphone-battery-life.html",
			"urlToImage": "https://image.cnbcfm.com/api/v1/image/107114891-1662573052480-iphone.jpg?v=1665028861&w=1920&h=1080",
			"publishedAt": "2022-10-06T04:01:01Z",
			"content": "Video playing on the iPhone 14 Plus. I've been testing Apple's new $899 iPhone 14 Plus, which hits stores Friday, for the past several days. It has the biggest screen you can get on an iPhone, witho… [+5202 chars]"
		},
		{
			"source": {
				"id": "the-wall-street-journal",
				"name": "The Wall Street Journal"
			},
			"author": "Cara Lombardo and Alexa Corse",
			"title": "Elon Musk and Twitter at Odds Over Terms of Agreement to Close Deal - The Wall Street Journal",
			"description": "The billionaire and the social-media platform are hashing out conditions tied to financing and dropping litigation over the stalled takeover.",
			"url": "https://www.wsj.com/articles/elon-musk-and-twitter-discussed-price-cut-to-44-billion-takeover-in-recent-weeks-11665017788",
			"urlToImage": "https://images.wsj.net/im-638143/social",
			"publishedAt": "2022-10-06T04:01:00Z",
			"content": null
		},
		{
			"source": {
				"id": null,
				"name": "Daily Beast"
			},
			"author": "AJ McDougall",
			"title": "Wynonna Judd Denies Feuding With Sister Ashley Over Their Mom's Will - The Daily Beast",
			"description": "“It’s not about being successful and smart and capable,” the 58-year-old singer said, of her new relationship with her sister. “It’s about, ‘I love you.’ ‘I love you, too.’”",
			"url": "https://www.thedailybeast.com/wynonna-judd-denies-fighting-with-sister-ashley-over-mom-naomis-will",
			"urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2241,w_3984,x_0,y_83/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1665020027/GettyImages-1417821390_kamib3",
			"publishedAt": "2022-10-06T03:54:06Z",
			"content": "In a new interview with People, Wynonna Judd put to bed the rumors of a supposed rift with her sister Ashley over their late mothers estate. After Naomi Judd died by suicide in April, claims that the… [+925 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "KTLA Los Angeles"
			},
			"author": "Cameron Kiszla, Associated Press",
			"title": "Sheriff: All 4 members of kidnapped family found dead in Merced County - KTLA Los Angeles",
			"description": "“Tonight, our worst fears have been confirmed.” That’s how Merced County Sheriff Vernon H. Warnke began the difficult process of informing the public that all four members of a family have been found dead after they were kidnapped at gunpoint in Merced County…",
			"url": "https://ktla.com/news/sheriff-all-4-members-of-kidnapped-family-found-dead-in-merced-county/",
			"urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2022/10/9ea7bddd3e6141b99f3d03c5d9daeb65-1.jpg?w=1280",
			"publishedAt": "2022-10-06T03:49:18Z",
			"content": "“Tonight, our worst fears have been confirmed.” That’s how Merced County Sheriff Vernon H. Warnke began the difficult process of informing the public that all four members of a family have been foun… [+1230 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "New York Post"
			},
			"author": "David Propper",
			"title": "Purdue student accused of killing roommate says 'I love my family' after arrest - New York Post ",
			"description": "Police Chief Lesley Wiete called the attack “unprovoked and senseless” during a news conference.",
			"url": "https://nypost.com/2022/10/05/purdues-ji-min-sha-escorted-to-jail-after-murder-arrest/",
			"urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/10/purdue-university-dorm-murder-0001.jpg?quality=75&strip=all&w=1024",
			"publishedAt": "2022-10-06T03:25:00Z",
			"content": "The Purdue University student accused of killing his roommate in their dorm appeared to mutter I love my family as authorities took him to jail Wednesday. Accused killer Ji Min Sha, 22, seemed to ma… [+1765 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "ESPN"
			},
			"author": "David Schoenfield",
			"title": "MLB playoff field is set! Why 2022 postseason could be best ever - ESPN",
			"description": "From those under the most pressure to win to the teams and young stars with opportunities to show they're legit, this is why this October -- and November -- will be amazing.",
			"url": "https://www.espn.com/mlb/story/_/id/34732926/mlb-playoff-field-set-why-2022-postseason-best-ever",
			"urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1005%2Fr1071361_1296x729_16%2D9.jpg",
			"publishedAt": "2022-10-06T02:28:25Z",
			"content": "AP Photo/Hakim Wright The regular season is officially in the books (OK, maybe there is still a game or two trickling slowly to its finish as you read this) and the 2022 MLB playoffs are set to star… [+17309 chars]"
		},

		{
			"source": {
				"id": "marca",
				"name": "Marca"
			},
			"author": "LW",
			"title": "Prince Andrew: sex addiction and continuous visits of women to Buckingham Palace revealed - Marca English",
			"description": "A documentary released this Wednesday exposes Prince Andrew and his addiction to sex, in addition to the fact that he used Buckingham Palace to have his meetings with many women.",
			"url": "https://www.marca.com/en/lifestyle/uk-news/2022/10/06/633e3b2422601dab198b457a.html",
			"urlToImage": "https://phantom-marca.unidadeditorial.es/19dfb59f9fc2582e3dc07e65e71a9bdc/resize/1200/f/jpg/assets/multimedia/imagenes/2022/10/06/16650226629086.jpg",
			"publishedAt": "2022-10-06T02:19:00Z",
			"content": "A documentary released this Wednesday exposes Prince Andrew and his addiction to sex, in addition to the fact that he used Buckingham Palace to have his meetings with many women. This is how Paul Pa… [+1536 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "CNBC"
			},
			"author": "Carmen Reinicke",
			"title": "Stock futures tick up slightly on Wednesday after two-day market rally ends - CNBC",
			"description": "Here's how stock futures are trading after Wednesday's market slip.",
			"url": "https://www.cnbc.com/2022/10/05/stock-futures-are-flat-on-wednesday-after-two-day-market-rally-ends.html",
			"urlToImage": "https://image.cnbcfm.com/api/v1/image/107128598-gettyimages-1428716933-dscf7684_3e023f53-0424-4f88-8600-9825d974a1fb.jpeg?v=1665007289&w=1920&h=1080",
			"publishedAt": "2022-10-06T01:57:00Z",
			"content": "U.S. stock futures were slightly higher Wednesday evening after falling in the regular trading session and breaking a massive two-day rally. Dow Jones Industrial Average futures rose by 37 points, o… [+1558 chars]"
		},

		{
			"source": {
				"id": "the-washington-post",
				"name": "The Washington Post"
			},
			"author": "Toluse Olorunnipa",
			"title": "Biden, DeSantis meet in Florida, pledging bipartisanship on Ian relief - The Washington Post",
			"description": "The president and the governor, potential opponents in the 2024 presidential campaign, put politics aside during the trip, instead focusing on the urgent matter of recovery from Hurricane Ian.",
			"url": "https://www.washingtonpost.com/politics/2022/10/05/biden-desantis-hurricane-florida/",
			"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YB3HKZ3VXACGJMRS6ESUNMN76M.jpg&w=1440",
			"publishedAt": "2022-10-06T01:39:20Z",
			"content": "FORT MYERS BEACH, Fla. As President Biden visited this storm-stricken community in southwest Florida on Wednesday, touring the damage from Hurricane Ian and pledging billions of dollars for recovery,… [+11476 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Daily Beast"
			},
			"author": "Roger Sollenberger",
			"title": "She Had an Abortion With Herschel Walker. She Also Had a Child With Him. - The Daily Beast",
			"description": "Herschel Walker has claimed he has no idea who this woman could be. Here's why that's surprising.",
			"url": "https://www.thedailybeast.com/she-had-an-abortion-with-herschel-walker-she-also-had-a-child-with-him",
			"urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1125,w_2000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1665016018/221005-roger-herschel-hero_eyepql",
			"publishedAt": "2022-10-06T01:35:26Z",
			"content": "After a woman revealed that Republican senatorial candidate Herschel Walker had urged her to have an abortion, Walker adamantly denied the story and claimed he had no idea who this woman could be. B… [+8063 chars]"
		},
		{
			"source": {
				"id": "the-washington-post",
				"name": "The Washington Post"
			},
			"author": "Isabelle Khurshudyan, Paul Sonne, Kamila Hrabchuk",
			"title": "A more strategic Russian retreat signals long fight ahead in Kherson - The Washington Post",
			"description": "A day after Ukrainian forces reclaimed more territory in the south, the jubilation of a breakthrough was tempered by anxiety over an expected hard fight.",
			"url": "https://www.washingtonpost.com/world/2022/10/05/more-strategic-russian-retreat-signals-long-fight-ahead-kherson/",
			"urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UNIEML5XDCQ5BRVZVJHGP4XFWQ.JPG&w=1440",
			"publishedAt": "2022-10-06T01:31:00Z",
			"content": "MYKOLAIV REGION, Ukraine The drone operator ignored the occasional thunder of outgoing artillery in the distance and kept his eyes focused on the computer monitor in front of him, waiting for the bur… [+9918 chars]"
		},
		{
			"source": {
				"id": "associated-press",
				"name": "Associated Press"
			},
			"author": "Hyung-jin Kim",
			"title": "North Korea launches more missiles as US redeploys carrier - The Associated Press - en Español",
			"description": "SEOUL, South Korea (AP) — North Korea launched two short-range ballistic missiles toward its eastern waters Thursday after the United States redeployed an aircraft carrier near the Korean Peninsula in response to Pyongyang’s previous launch of a nuclear-capab…",
			"url": "https://apnews.com/article/japan-seoul-south-korea-north-joint-chiefs-of-staff-6cbb36c582a09b7c9b6005ebdaa863d6",
			"urlToImage": "https://storage.googleapis.com/afs-prod/media/646c03a41fe64acc97465f3edbe2d8c4/3000.jpeg",
			"publishedAt": "2022-10-06T01:29:54Z",
			"content": "SEOUL, South Korea (AP) North Korea launched two short-range ballistic missiles toward its eastern waters Thursday after the United States redeployed an aircraft carrier near the Korean Peninsula in … [+6410 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "KSL.com"
			},
			"author": "Sandee LaMotte, CNN",
			"title": "When you eat may dictate how hungry you are, study says - KSL.com",
			"description": "We all know that eating later in the day isn't good for our waistlines, but why? A new study weighed in on that question by comparing people who ate the same foods — but at different times in the day.",
			"url": "https://www.ksl.com/article/50489277/when-you-eat-may-dictate-how-hungry-you-are-study-says",
			"urlToImage": "https://img.ksl.com/slc/2859/285916/28591617.jpeg?filter=kslv2/responsive_story_lg",
			"publishedAt": "2022-10-06T00:41:04Z",
			"content": "Estimated read time: 4-5 minutes ATLANTA We all know that eating later in the day isn't good for our waistlines, but why? A new study weighed in on that question by comparing people who ate the same… [+4960 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "Page Six"
			},
			"author": "Oli Coleman",
			"title": "Kanye West baffled by negative response to his 'White Lives Matter' designs - Page Six",
			"description": "Page Six is told the rapper-turned-designer can’t understand why he’s struggling to be understood after the horrified reaction to his latest collection.",
			"url": "https://pagesix.com/2022/10/05/kanye-west-baffled-by-bad-response-to-white-lives-matter-show/",
			"urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/10/kanye-west-negative-response-white-lives-matter.jpg?quality=75&strip=all&w=1200",
			"publishedAt": "2022-10-05T23:07:00Z",
			"content": "Far from a being a calculated publicity stunt designed to stir up outrage, sources close to Kanye West say that the rapper-turned-designer is baffled by the backlash that his latest collection receiv… [+1451 chars]"
		},
		{
			"source": {
				"id": null,
				"name": "YouTube"
			},
			"author": null,
			"title": "George Strait Tributes His Friend, Loretta Lynn - Taste of Country",
			"description": null,
			"url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DohFt0yi1g5o",
			"urlToImage": null,
			"publishedAt": "2022-10-05T23:00:17Z",
			"content": null
		}
	]
	constructor()
	{
		super();
		this.state={
			articles:this.articles,
			loading:false,
		}
	}
  render() {
	return (
	  <div className="container">
		<h2>NewsLad - TOP HEADLINES</h2>
		This is news .
		<div className="row">
			
				{this.state.articles.map((element)=>{
					return <div className="col-md-3" key={element.url}>
					<NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>                   {/* //3 rows  */}
				   </div>
				})}
			</div>	
	  </div>
	)
  }
}

export default news
