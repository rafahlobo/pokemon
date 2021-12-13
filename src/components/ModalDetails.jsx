import { Modal, Button, Icon, Image } from 'semantic-ui-react'
import DataContext from "../data/dataContext"
import { useContext } from "react"
import placeholderImage from "../assets/placeholder_image.png"
const ModalDetails = _ => {
    const { updateStateAsObj, state } = useContext(DataContext)
    const { modal, pokemonSelected } = state
    const showModal = mustShow => {
        updateStateAsObj({ modal: mustShow, pokemonSelected: null })
    }
    const pokemonImage = pokemonSelected?.image
    const imageUrl = pokemonImage ?
        pokemonImage :
        placeholderImage
    return (
        <Modal
            open={modal}
            onClose={() => showModal(false)}
            onOpen={() => showModal(true)}
        >
            <Modal.Header>
                <span className='pokemonName'>
                    {pokemonSelected?.name}
                </span>
            </Modal.Header>
            <Modal.Content image scrolling>
                <Image size='small' src={imageUrl} wrapped />

                <Modal.Description>
                    <p>
                        <strong>Base de experiência:</strong> {pokemonSelected?.experience}
                    </p>
                    <p>
                        <strong>Espécie:</strong> {pokemonSelected?.especie}
                    </p>
                    <p>
                        <strong>Formas:</strong> {pokemonSelected?.forms}
                    </p>
                    <p>
                        <strong>Altura:</strong> {pokemonSelected?.height}
                    </p>
                    <p>
                        <strong>Habilidades:</strong> {pokemonSelected?.abilities}
                    </p>
                    <p>
                        <strong>Tipo:</strong> {pokemonSelected?.type}
                    </p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => showModal(false)} color='red'>
                    <Icon name='close' /> Fechar
                </Button>
            </Modal.Actions>
        </Modal>
    )

}
export default ModalDetails