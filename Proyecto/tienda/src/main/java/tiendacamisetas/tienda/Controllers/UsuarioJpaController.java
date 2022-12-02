package tiendacamisetas.tienda.Controllers;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tiendacamisetas.tienda.Controllers.exceptions.NonexistentEntityException;
import tiendacamisetas.tienda.Models.Usuario;

@CrossOrigin(origins="/*")
@RestController
@RequestMapping("/usuario")
//@ResponseBody
public class UsuarioJpaController implements Serializable {

    public UsuarioJpaController(EntityManagerFactory emf) {
        this.emf = emf;
    }
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
  
    @CrossOrigin(origins="*")
    @PostMapping("/login")
    public HashMap login(@RequestBody Usuario usuario){
        HashMap<String, String> map = new HashMap<>();
        EntityManager em = getEntityManager();
        try{
            String query = "SELECT * FROM usuario WHERE correo='"+usuario.getCorreo()+"' AND contraseña='"+usuario.getContraseña()+"' ";
            Query q = em.createNativeQuery(query);
            List<Usuario> lu = q.getResultList();
            if (lu.isEmpty()){
                map.put("msj","no");
                //return  "no";
            }
            else{
                map.put("msj","ok");
                //return "ok";
            }
    }catch(Exception ex){
        map.put("msj","ok");
        //return "error";
        }
        return map;
    }
    
    @CrossOrigin("*")
    @PostMapping()
    public HashMap create(@RequestBody Usuario usuario) {
        HashMap<String, String> map = new HashMap<>();
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            em.persist(usuario);
            em.getTransaction().commit();
            map.put("msj","ok");
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return map;
    }
    
    @CrossOrigin(origins="*")
    @PutMapping()
    public HashMap edit(@RequestBody Usuario usuario) throws NonexistentEntityException, Exception {
        HashMap<String, String> map = new HashMap<>();
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            usuario = em.merge(usuario);
            em.getTransaction().commit();
            map.put("msj","ok");
        } catch (Exception ex) {
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                Integer id = usuario.getId();
                if (findUsuario(id) == null) {
                    throw new NonexistentEntityException("The usuario with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return map;
    }
    
    @CrossOrigin(origins="*")
    @DeleteMapping("/{id}")
    public HashMap destroy(@PathVariable() Integer id) throws NonexistentEntityException {
        HashMap<String, String> map = new HashMap<>();
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            Usuario usuario;
            try {
                usuario = em.getReference(Usuario.class, id);
                usuario.getId();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The usuario with id " + id + " no longer exists.", enfe);
            }
            em.remove(usuario);
            em.getTransaction().commit();
            map.put("msj","ok");
        } finally {
            if (em != null) {
                em.close();
            }
        }
        return map;
    }
    
    @CrossOrigin(origins="*")
    @GetMapping()
    public List<Usuario> findUsuarioEntities() {
        return findUsuarioEntities(true, -1, -1);
    }

    public List<Usuario> findUsuarioEntities(int maxResults, int firstResult) {
        return findUsuarioEntities(false, maxResults, firstResult);
    }

    private List<Usuario> findUsuarioEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(Usuario.class));
            Query q = em.createQuery(cq);
            if (!all) {
                q.setMaxResults(maxResults);
                q.setFirstResult(firstResult);
            }
            return q.getResultList();
        } finally {
            em.close();
        }
    }

    @CrossOrigin(origins="*")
    @GetMapping("/{id}")
    public Usuario findUsuario(@PathVariable() Integer id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(Usuario.class, id);
        } finally {
            em.close();
        }
    }

    public int getUsuarioCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<Usuario> rt = cq.from(Usuario.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
