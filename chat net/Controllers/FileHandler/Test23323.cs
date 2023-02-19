using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.FileHandler
{
    public class Test23323 : Controller
    {
        // GET: Test23323
        public ActionResult Index()
        {
            return View();
        }

        // GET: Test23323/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Test23323/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Test23323/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Test23323/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Test23323/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Test23323/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Test23323/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
