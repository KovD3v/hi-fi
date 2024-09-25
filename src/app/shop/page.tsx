import {
	Card,
	CardContent,
	// CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

export default function Shop() {
	const categories = [
		{
			title: "Giradischi",
			image: "https://media.sonos.com/images/znqtjj88/production/beaff0ab758d797edf65990199c1100a96499381-2480x2480.png?w=3840&q=100&fit=clip&auto=format",
			subCategories: [
				{
					title: "Giradischi",
					image: "https://media.sonos.com/images/znqtjj88/production/beaff0ab758d797edf65990199c1100a96499381-2480x2480.png?w=3840&q=100&fit=clip&auto=format",
					description: "Giradischi",
				},
				{
					title: "Testine",
					image: "https://newsoundhifi.com/site2/wp-content/uploads/2023/03/at85ep_01-1024x1024.png",
					description: "Testine",
				},
				{
					title: "Bracci",
					image: "https://www.sartoriacustica.it/wp-content/uploads/2022/05/ROKSAN-SARA.png",
					description: "Bracci",
				},
				// {
				// 	title: "Accessori",
				// 	image: "",
				// 	description: "Accessori",
				// },
			],
		},
		{
			title: "Amplificatori",
			image: "https://media.sonos.com/images/znqtjj88/production/cb83622b9d91123fec92a40bbf9100619c1db067-3998x2966.png?w=828&q=100&fit=clip&auto=format",
			subCategories: [
				{
					title: "Pre Phono",
					image: "https://d28lcup14p4e72.cloudfront.net/281995%2F8596748%2Fmceclip0.png",
					description: "Pre Phono",
				},
				{
					title: "Pre Amplificatori",
					image: "https://m.media-amazon.com/images/I/61dZF0gxMbL.jpg",
					description: "Pre Amplificatori",
				},
				{
					title: "Amplificatori Finali",
					image: "https://dolfihifi.com/wp-content/uploads/2022/05/XL_MM7025_back_New.png",
					description: "Amplificatori Finali",
				},
				{
					title: "Integrati",
					image: "https://acme-biella.com/wp-content/uploads/2022/06/Torus-5050-black.png",
					description: "Integrati",
				},
				{
					title: "Sintoamplificatori",
					image: "https://www.soundbeat.it/wp-content/uploads/2024/01/XL_sr7015_N_SG_fr_op.png",
					description: "Sintoamplificatori",
				},
			],
		},
		{
			title: "Cavi",
			image: "https://media.sonos.com/images/znqtjj88/production/e7d555abb9fc787cb499ffb1c01e82ce535a36be-1557x822.png?w=1200&q=100&fit=clip&auto=format",
			subCategories: [
				{
					title: "Power Cable",
					image: "https://media.sonos.com/images/znqtjj88/production/4bc6d30f059bf43781f7da47573e5fc957438942-2041x1344.png?w=1200&q=100&fit=clip&auto=format",
					description: "Power Cable",
				},
				{
					title: "Speaker Jumper",
					image: "https://forte-distribution.com/wp-content/uploads/2023/12/xlo-dna_jumper-wide_web2.png",
					description: "Speaker Jumper",
				},
				{
					title: "Speaker Cable",
					image: "https://emotiva.com/cdn/shop/products/Speakercable_web_1200x.png?v=1680153753",
					description: "Speaker Cable",
				},
				{
					title: "Digitali",
					image: "https://media.sonos.com/images/znqtjj88/production/562e22de0919ae0ee7d015a6220c96092a4c47d3-1387x1387.png?w=1200&q=100&fit=clip&auto=format",
					description: "Digitali",
				},
				{
					title: "Analogici",
					image: "",
					description: "Analogici",
				},
			],
		},
		{
			title: "Cuffie",
			image: "https://media.sonos.com/images/znqtjj88/production/34735de0ce8535cb9fe2af5a78db26dcb4aaa9f1-2500x2500.png?w=2048&q=100&fit=clip&auto=format",
			subCategories: [
				{
					title: "Cuffie",
					image: "https://media.sonos.com/images/znqtjj88/production/34735de0ce8535cb9fe2af5a78db26dcb4aaa9f1-2500x2500.png?w=2048&q=100&fit=clip&auto=format",
					description: "Cuffie",
				},
				{
					title: "Amplificatori",
					image: "https://simaudio.com/wp-content/uploads/2018/03/230HAD_Black_1370x590.png",
					description: "Amplificatori Cuffie",
				},
			],
		},
		{
			title: "Diffusori",
			image: "https://edifier-online.eu/cdn/shop/products/edifier-r980t-2_5151c20f-7f83-4e4e-afdf-80fee1be2eb6.png?v=1695712992&width=3840",
			subCategories: [
				{
					title: "Diffusori Passivi",
					image: "https://dolfihifi.com/wp-content/uploads/2015/09/opticon-6-mk2-satin-black-dolfi-hi-fi-firenze.png",
					description: "Diffusori Passivi",
				},
				{
					title: "Diffusori Attivi",
					image: "https://edifier-online.eu/cdn/shop/products/edifier-r980t-2_5151c20f-7f83-4e4e-afdf-80fee1be2eb6.png?v=1695712992&width=3840",
					description: "Diffusori Attivi",
				},
			],
		},
		{
			title: "Trattamento Acustico",
			image: "https://decorvibe.it/cdn/shop/files/Frontview_b1375d88-07e7-4ec2-9348-40642a281061.png?v=1715773320&width=1946",
		},
		{
			title: "Lettori CD",
			image: "https://dolfihifi.com/wp-content/uploads/2020/08/CD6007_1.png",
		},
		{
			title: "Streamer DAC Clock",
			image: "https://images.theabsolutesound.com/wp-content/uploads/2020/11/lumin_x1.png",
		},
		{
			title: "Accessori",
			image: "",
		},
	];
	return (
		<div className="flex w-full">
			<div className="grid w-full px-10 gap-12 grid-cols-1">
				{categories.map((category) => (
					<Card key={category.title} className="flex flex-col">
						<CardHeader>
							<CardTitle>{category.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<img
								src={category.image}
								alt={category.title}
								className="w-64"
							/>
						</CardContent>
						<CardFooter className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
							{category.subCategories?.map((subCategory) => (
								<Card
									key={subCategory.title}
									className="flex flex-col w-64">
									<CardHeader>
										<CardTitle>
											{subCategory.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<img
											src={subCategory.image}
											alt={subCategory.title}
											className="aspect-square object-scale-down"
										/>
									</CardContent>
								</Card>
							))}
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
