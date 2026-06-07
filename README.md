 ```
 
 <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<HomePage />} />
                <Route path="home" element= { <HomePage /> } />
                <Route path="about" element= { <AboutPage /> } />
                <Route path="blogs" element= { <BlogPage /> }  />
                <Route path="contact" element= { <ContactPage /> } />  
                <Route path ="login" element = {<LoginForm />} />
                <Route path ="dashboard" element = {<DashboardPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            
</BrowserRouter>
```