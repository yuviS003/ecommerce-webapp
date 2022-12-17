import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Rating from '@mui/material/Rating';
import data from '../../data/products.json'
// import Footer from '../../components/Footer/Footer'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';



export default function AllProducts() {
    const [sections, setSections] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [previewProduct, setPreviewProduct] = useState({
        image: "",
        p_name: "",
        p_rating: 0,
        p_cost: ""
    })
    const handleModalOpen = (prod) => {
        setPreviewProduct(prod)
        setModalOpen(true)
    }
    const handleModalClose = () => setModalOpen(false)
    useEffect(() => {
        console.log(data)
        setSections(data)
        console.log(sections)
    }, [])
    return (
        <>
            <div className="h-screen p-5 flex flex-col">
                {sections.map((section, index) => {
                    return (
                        <div className="my-2" key={index}>
                            <span className='text-2xl ml-2 tracking-widest'>{section.section_header}</span>
                            <Carousel itemsToShow={4}>
                                {section.products.map((prod, index2) => {
                                    return (
                                        <div className="h-[500px] w-full flex flex-col justify-center items-center" key={index2}>
                                            <img src={prod.image} alt="img" className='w-[200px] h-[300px] cursor-pointer' onClick={() => handleModalOpen(prod)} />
                                            <div className="flex flex-col my-1 min-w-[200px]">
                                                <Rating name="read-only" value={prod.p_rating} readOnly />
                                                <span
                                                    className='text-lg m-1'
                                                    title={prod.p_name}
                                                >
                                                    {prod.p_name.split('').slice(0, 25).join('')}...
                                                </span>
                                                <span className="flex pl-2">
                                                    ₹
                                                    <span className="text-3xl">{prod.p_cost.split('.')[0]}</span>
                                                    <span className="">{prod.p_cost.split('.')[1]}</span>
                                                </span>
                                                <button type="button" className='w-[200px] bg-yellow-400 text-lg flex justify-center items-center m-2 p-1 rounded-md border border-gray-200 hover:bg-yellow-300'>Add to Cart</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    )
                })}
            </div>
            <Dialog
                open={modalOpen}
                keepMounted
                onClose={handleModalClose}
                className="h-[90vh] m-auto"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{previewProduct.p_name}</DialogTitle>
                <DialogContent>
                    <img src={previewProduct.image} alt="prevPrd" className="w-[80%] h-[400px] mx-auto mb-2" />
                    <DialogContentText id="alert-dialog-slide-description">
                        PRODUCT DESCRIPTION Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt facilis aliquam iusto, vero expedita facere beatae blanditiis consectetur non sint! Porro hic ab sed fuga veritatis adipisci omnis saepe temporibus praesentium sint sit quasi facilis doloremque maiores, quidem quia eius. Odit eaque accusantium aliquam qui magnam molestias, itaque dolore, suscipit aspernatur repellendus, quibusdam iusto? Enim error ducimus quis? Fugiat adipisci, sequi quo saepe provident ab praesentium blanditiis dolorem. Aliquid aspernatur quidem ratione qui? Doloremque alias facilis eveniet cupiditate qui necessitatibus aliquid rerum saepe eligendi, quo accusamus veniam harum molestiae quisquam beatae inventore, sunt ab sint molestias. Fugiat quo iure, odio ullam error dolorem placeat non quam dignissimos eum in autem quidem necessitatibus cupiditate quos voluptatum assumenda sit nulla maiores, rem reprehenderit quas est. Cumque enim incidunt dolorem corrupti ullam, exercitationem, quaerat natus, quia alias reiciendis minus. At aliquid iusto accusamus cum beatae eaque voluptatum nesciunt quia, culpa aut ab, nulla natus vel doloremque consequatur repellat corrupti sed. Nihil culpa placeat eaque recusandae porro nisi fugit ut quis voluptatibus perferendis, debitis iste rem quaerat ratione nobis delectus nostrum temporibus suscipit distinctio veritatis esse ullam! Praesentium numquam, ipsum impedit quis fugit aspernatur vitae nesciunt velit harum labore doloribus culpa reprehenderit. Enim, ipsa.
                    </DialogContentText>
                    <Rating name="read-only" value={previewProduct.p_rating} className="my-2" readOnly />
                    <span className="flex my-2">
                        ₹
                        <span className="text-3xl">{previewProduct.p_cost.split('.')[0]}</span>
                        <span className="">{previewProduct.p_cost.split('.')[1]}</span>
                    </span>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>KEEP EXPLORING</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


