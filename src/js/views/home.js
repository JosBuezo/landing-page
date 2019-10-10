import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container1-fluid section1">
		<nav className="navbar navbar-expand-lg navbar-white bg-black">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							About <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Portfolio
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
		<div className="container-hero container-fluid">
			<div className="centered-hero">
				<div className="card">
					<div className="card-header">Featured</div>
					<img src="https://picsum.photos/id/184/400/300" />
					<div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<p className="card-text">
							Cras semper tristique nibh, ac tincidunt erat sodales sit amet. Class aptent taciti sociosqu
							ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut ligula vel magna
							elementum dapibus. Integer ante massa, finibus non risus eu, commodo mollis nisl. Donec nunc
							ligula, elementum sit amet tempor vel, maximus non massa. Aliquam sed ornare dolor. Sed
							faucibus ante in aliquam rhoncus. Maecenas pellentesque ultricies purus. Suspendisse eget
							semper augue. Mauris efficitur vehicula ultrices. Nullam aliquam urna sit amet velit feugiat
							rutrum. Praesent in risus vehicula, pharetra erat id, aliquet dolor. Nam ultrices eros quis
							dolor ullamcorper posuere. Sed id auctor justo, ut sollicitudin nulla. Mauris maximus nisi
							eu cursus viverra.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
					<div className="flexCards">
						<div className="card text-white bg-primary mb-3">
							<div className="card-header">Header</div>
							<div className="card-body">
								<h5 className="card-title">Primary card title</h5>
								<p className="card-text">
									Tristique nibh, ac tincidunt erat sodales sit amet. Class aptent taciti sociosqu ad
									litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut ligula vel magna
									elementum dapibus. Integer ante massa, finibus non risus eu, commodo mollis nisl.
									Donec nunc ligula, elementum sit amet tempor vel, maximus non massa. Aliquam sed
									ornare dolor. ultricies enim in augue laoreet bibendum. Interdum et malesuada fames
									ac ante ipsum primis in faucibus. Sed consequat, lorem sollicitudin venenatis
									tempus, arcu nulla vulputate sem, sed tincidunt dolor est aliquam est. In neque
									magna, vulputate vitae ipsum non, tristique fermentum nibh.
								</p>
								<a href="#" className="btn btn-dark">
									Click Here
								</a>
							</div>
						</div>
						<div className="card text-white bg-secondary mb-3">
							<div className="card-header">Header</div>
							<div className="card-body">
								<h5 className="card-title">Secondary card title</h5>
								<p className="card-text">
									Semper tristique nibh, ac tincidunt erat sodales sit amet. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut
									ligula vel magna elementum dapibus. Integer ante massa, finibus non risus eu,
									commodo mollis nisl. Donec nunc ligula, elementum sit amet tempor vel, maximus non
									Cras semper tristique nibh, ac tincidunt erat sodales sit amet. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut
									ligula vel magna elementum dapibus. Integer ante massa, finibus non risus eu,
									commodo mollis nisl. Donec nunc ligula, elementum sit amet tempor vel, maximus non
									massa.
								</p>
								<a href="#" className="btn btn-dark">
									Click Here
								</a>
							</div>
						</div>
						<div className="card text-white bg-success mb-3">
							<div className="card-header">Header</div>
							<div className="card-body">
								<h5 className="card-title">Success card title</h5>
								<p className="card-text">
									Fusce egestas velit id nisl lacinia, volutpat venenatis dui mattis. Nunc eget cursus
									mauris. Nulla efficitur luctus ligula quis mollis. Cras faucibus facilisis posuere.
									Maecenas vitae dui et odio gravida mollis. Nulla imperdiet magna erat, sed dictum
									nibh eleifend a. Etiam non lobortis felis. Phasellus fringilla convallis leo, eget
									luctus lectus elementum ac. Sed eget pharetra dui. Curabitur eget ultrices ligula,
									quis ullamcorper lectus. Maecenas sollicitudin porta augue. Sed vel commodo leo, in
									gravida ex. Praesent eu faucibus diam, sit amet accumsan enim. Nunc fringilla ut
									arcu blandit semper.
								</p>
								<a href="#" className="btn btn-dark">
									Click Here
								</a>
							</div>
						</div>

						<div className="card text-white bg-danger mb-3">
							<div className="card-header">Header</div>
							<div className="card-body">
								<h5 className="card-title">Danger card title</h5>
								<p className="card-text">
									Cras semper tristique nibh, ac tincidunt erat sodales sit amet. Class aptent taciti
									sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut
									ligula vel magna elementum dapibus. Integer ante massa, finibus non risus eu,
									commodo mollis nisl. Donec nunc ligula, elementum sit amet tempor vel, maximus non
									massa. Aliquam sed ornare dolor.Etiam non lobortis felis. Phasellus fringilla
									convallis leo, eget luctus lectus elementum ac. Sed eget pharetra dui. Curabitur
									eget ultrices ligula, quis ullamcorper lectus. Maecenas sollicitudin porta augue.
								</p>
								<a href="#" className="btn btn-dark">
									Click Here
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
